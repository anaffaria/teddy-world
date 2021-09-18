package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Cart;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.Item;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.repostiory.ICategoryRepository;
import br.com.teddy.store.repostiory.ICustomerRepository;
import br.com.teddy.store.repostiory.ITeddyRepository;
import br.com.teddy.store.service.ICartService;
import br.com.teddy.store.service.IGenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements IGenericService<Cart>, ICartService {

    @Autowired
    ICategoryRepository carts;

    @Autowired
    ITeddyRepository  teddy;

    @Autowired
    ICustomerRepository customers;

    @Override
    public void addCartItem(Long idCustomer, Item item) {
        Customer customer = customers.findById(idCustomer).get();
        if(null != customer) {
            customer.getCart().getItemList().add(item);
        }
        customers.saveAndFlush(customer);
    }

    @Override
    public void removeCartItem(Customer customer, Long idItem) {

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
