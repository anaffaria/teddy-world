package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.Item;
import br.com.teddy.store.domain.Order;
import br.com.teddy.store.domain.Teddy;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.ChartDTO;
import br.com.teddy.store.dto.FactoryResponseDTO;
import br.com.teddy.store.repostiory.*;
import br.com.teddy.store.service.IGenericService;
import br.com.teddy.store.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

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
                p.getCreditCard().setCustomer(customer);
                creditCards.saveAndFlush(p.getCreditCard());
                paymentMethodsRepository.saveAndFlush(p);
            });

        Order newOrder = orders.save(object);

        return FactoryResponseDTO.createDTO(newOrder, "CREATE");
    }

    @Override
    public AttrResponseDTO delete(Long id) {
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

    public void beforeEach() {
        FactoryResponseDTO.hasError = false;
        FactoryResponseDTO.message = null;
    }
}
