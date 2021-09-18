package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Cart;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.Item;
import br.com.teddy.store.domain.Teddy;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.repostiory.ICategoryRepository;
import br.com.teddy.store.repostiory.ICustomerRepository;
import br.com.teddy.store.repostiory.ITeddyRepository;
import br.com.teddy.store.service.ICartService;
import br.com.teddy.store.service.IGenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CartService implements IGenericService<Cart>, ICartService {

    @Autowired
    ICategoryRepository carts;

    @Autowired
    ITeddyRepository  teddies;

    @Autowired
    ICustomerRepository customers;

    @Override
    public void addCartItem(Long idCustomer, Item item) throws Exception {
        Customer customer = customers.findById(idCustomer).get();
        Teddy teddy = teddies.getById(item.getTeddy().getId());

        if(teddy.getAmountAvailable() - item.getAmount() < 0) {
            throw new Exception("Insufficient teddy amount available");
        }

        customer.getCart().getItemList().add(item);
        teddy.setAmountAvailable(teddy.getAmountAvailable() - item.getAmount());
        customers.saveAndFlush(customer);
    }

    @Override
    public void removeCartItem(Long idCustomer, Long idItem) {
        Customer customer = customers.findById(idCustomer).get();

        List<Item> items = customer.getCart().getItemList().stream().filter(i -> i.getId() != idItem).collect(Collectors.toList());
        customer.getCart().setItemList(items);

        customers.saveAndFlush(customer);
    }

    @Override
    public List<AttrResponseDTO> findAll() {
        return null;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return null;
    }

    @Override
    public AttrResponseDTO saveAndFlush(Cart object) {
        return null;
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        return null;
    }
}
