package br.com.teddy.store.service;

import br.com.teddy.store.domain.Item;

public interface ICartService {
    void addCartItem(Long idCustomer, Item item) throws Exception;
    void removeCartItem(Long idCustomer, Long idItem);
}
