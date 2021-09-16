package br.com.teddy.store.service;

import br.com.teddy.store.domain.Customer;

public interface ICartService {
    public void addCartItem(Customer customer, Long idTeddy, Integer amount);
    void removeCartItem(Customer customer, Long idItem);
}
