package br.com.teddy.store.service;

import br.com.teddy.store.domain.Customer;

import java.util.Optional;

public interface ICustomerService {
    Optional<Customer> findByEmail(String email);
}
