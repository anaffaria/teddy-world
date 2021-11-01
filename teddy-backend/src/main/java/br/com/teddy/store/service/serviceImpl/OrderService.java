package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.*;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.ChartDTO;
import br.com.teddy.store.dto.DataSetDTO;
import br.com.teddy.store.dto.FactoryResponseDTO;
import br.com.teddy.store.repostiory.*;
import br.com.teddy.store.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class OrderService implements IOrderService {

    @Autowired
    IOrdersRepository orders;

    @Autowired
    ICreditCardRepository creditCards;

    @Autowired
    ICustomerRepository customers;

    @Autowired
    ITeddyRepository teddy;

    @Autowired
    IPaymentMethodsRepository paymentMethodsRepository;

    @Autowired
    ICategoryRepository categories;

    @Override
    public List<AttrResponseDTO> findAll() {
        beforeEach();
        List<Order> orderList = orders.findAll(Sort.by(Sort.Direction.DESC, "createdAt"));
        List<AttrResponseDTO> responseDTOList = new ArrayList<>();
        orderList.forEach(t -> responseDTOList.add(FactoryResponseDTO.createDTO(t, "LIST")));

        return responseDTOList;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return null;
    }

    @Override
    public AttrResponseDTO saveAndFlush(Order object) {
        beforeEach();
        StringBuilder errorsMessages = new StringBuilder();
        Customer customer = customers.findById(object.getCustomer().getId()).get();
        List<Item> items = new ArrayList<>();
        Double walletValue = customer.getWallet().getValue();
        customer.getCart().getItemList().forEach(i -> items.add(i));

        Double totalItemsValue = items.stream().mapToDouble(i -> i.getAmount() * i.getTeddy().getPriceFactory()).sum();
        Double total = totalItemsValue + object.getShippingTax();

        object.setItemList(items);

        errorsMessages.append(object.validate());

        if(errorsMessages.length() > 0){
            System.err.println(errorsMessages);
            FactoryResponseDTO.hasError = true;
            FactoryResponseDTO.message = errorsMessages.toString();
            return FactoryResponseDTO.createDTO(object, "CREATE");
        }

        if(null != object.getId()) {
            Order oldOrder = orders.findById(object.getId()).get();

            object.setUpdatedAt(LocalDateTime.now());
            object.setCreatedAt(oldOrder.getCreatedAt());
        }

        for(Item item : customer.getCart().getItemList()) {
            item.getTeddy().setAmount(item.getTeddy().getAmount() - item.getAmount());
            teddy.save(item.getTeddy());
        }

        customer.getCart().getItemList().clear();

        BigDecimal valueWallet = new BigDecimal(walletValue - total);
        valueWallet.setScale(2, RoundingMode.HALF_DOWN);

        customer.getWallet().setValue(valueWallet.doubleValue());

        if(walletValue - total < 0) {
            customer.getWallet().setValue(0d);
        }

        // foreach credit card and saveandflush.
        customer.getCreditCardList().forEach(c -> creditCards.saveAndFlush(c));

        customers.saveAndFlush(customer);

        if(null != object.getPaymentMethodList())
            object.getPaymentMethodList().forEach(p -> {
                p.setCreditCard(creditCards.getById(p.getCreditCard().getId()));
                creditCards.saveAndFlush(p.getCreditCard());
                paymentMethodsRepository.saveAndFlush(p);
            });

        Order newOrder = orders.save(object);

        return FactoryResponseDTO.createDTO(newOrder, "CREATE");
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        beforeEach();
        Order order = orders.findById(id).get();

        order.setStatus(Status.ORDER_CANCEL);
        order.setDeletedAt(LocalDateTime.now());

        orders.saveAndFlush(order);
        return null;
    }

    @Override
    public Order updateOrder(Order object) {
        Order order = orders.findById(object.getId()).get();
        order.setStatus(object.getStatus());
        return orders.saveAndFlush(order);
    }

    @Override
    public Order saveAndFlush(Order order, BindingResult result) {
        return null;
    }

    @Override
    public ChartDTO findAllByCreatedAtBetween(Date dateInitial, Date dateFinal, Integer searchType) {
        return null;
    }

    @Override
    public List<HashMap<String, Double>> fillCardsIndex() {
        return null;
    }

    @Override
    public List<DataSetDTO> ordersFiltered(String start, String end, String type) {
        String startConv = start + " 00:00:00";
        String endConv = end + " 23:59:59";
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        List<Order> orderList = orders.findAllByCreatedAtGreaterThanEqualAndCreatedAtLessThanEqual(LocalDateTime.parse(startConv, formatter),
                LocalDateTime.parse(endConv, formatter));

        List<AttrResponseDTO> responseDTOList = new ArrayList<>();
        orderList.forEach(t -> responseDTOList.add(FactoryResponseDTO.createDTO(t, "LIST")));

        Map<LocalDate, List<Order>> groupedByDate = orderList.stream()
                .collect(Collectors.groupingBy(order ->
                        order.getCreatedAt().truncatedTo(ChronoUnit.DAYS).atZone(ZoneId.systemDefault()).toLocalDate()));

        List<DataSetDTO> listDataSetDTOS = new ArrayList<>();

        if(type.equals("0")){
            List<Teddy> allTeddys = teddy.findAll();

            for (Teddy teddy : allTeddys) {
                DataSetDTO dataSetDTO = new DataSetDTO();
                List<Double> doubleList = new ArrayList<>();
                dataSetDTO.setLabel(teddy.getTitle());


                for(List<Order> order : groupedByDate.values()) {
                    Integer amount = 0;
                    for(Order orderValueGroup : order) {
                        for (Item item : orderValueGroup.getItemList()) {
                            if(item.getTeddy().equals(teddy))
                                amount+= item.getAmount();
                        }
                    }
                    doubleList.add(amount * teddy.getPriceFactory());
                }

                dataSetDTO.setData(doubleList);
                listDataSetDTOS.add(dataSetDTO);
            }
        } else {
            List<Category> allGenders = categories.findAll();

            for (Category gender : allGenders) {
                DataSetDTO dataSetDTO = new DataSetDTO();
                List<Double> doubleList = new ArrayList<>();
                dataSetDTO.setLabel(gender.getName());


                for (List<Order> order : groupedByDate.values()) {
                    Integer amount = 0;
                    Teddy teddy = null;
                    for (Order orderValueGroup : order) {
                        for (Item item : orderValueGroup.getItemList()) {
                            if (item.getTeddy().getCategory().contains(gender)) {
                                amount++;
                            }
                            teddy = item.getTeddy();
                        }
                    }
                    if (null != teddy)
                        doubleList.add(amount * teddy.getPriceFactory());
                }

                dataSetDTO.setData(doubleList);
                listDataSetDTOS.add(dataSetDTO);
            }
        }
        return listDataSetDTOS;
    }

    public void beforeEach() {
        FactoryResponseDTO.hasError = false;
        FactoryResponseDTO.message = null;
    }
}
