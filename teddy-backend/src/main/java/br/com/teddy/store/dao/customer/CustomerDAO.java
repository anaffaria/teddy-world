package br.com.teddy.store.dao.customer;

import br.com.teddy.store.dao.IDAO;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.repostiory.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerDAO implements IDAO {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    ICustomerRepository customerRepository;

    @Override
    public DomainEntity create(DomainEntity domainEntity) {
        Customer customer = (Customer) domainEntity;
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));

        return customerRepository.save((Customer) customer);
    }

    @Override
    public void delete(Long id) {
        customerRepository.deleteById(id);
    }

    @Override
    public DomainEntity update(DomainEntity domainEntity) {
        return customerRepository.save((Customer) domainEntity);
    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        List<DomainEntity> domains = new ArrayList<>();

        customerRepository.findAll().forEach(e -> domains.add(e));

        return domains;
    }

    @Override
    public DomainEntity get(Long id) {
        Customer customer = null;
        try {
            customer = customerRepository.findById(id).get();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return customer;
    }
}
