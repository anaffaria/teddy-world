package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.repostiory.ICustomerRepository;
import br.com.teddy.store.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerServiceImpl implements ICustomerService {
    @Autowired
    ICustomerRepository customerRepository;

    @Override
    public Optional<Customer> findByEmail(String email) {
        return customerRepository.findCustomerByEmail(email);
    }
}
