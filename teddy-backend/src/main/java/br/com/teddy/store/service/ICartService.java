package br.com.teddy.store.service;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.Item;

public interface ICartService {
    void addCartItem(Long idCustomer, Item item);
    void removeCartItem(Customer customer, Long idItem);
}
