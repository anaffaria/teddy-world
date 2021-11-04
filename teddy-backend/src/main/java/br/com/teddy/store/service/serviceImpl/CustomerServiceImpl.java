package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.repostiory.ICustomerRepository;
import br.com.teddy.store.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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

    @Override
    public Customer currentUserLoggedIn() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username;

        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
            Customer customer = this.findByEmail(username).get();
            return customer;
        }

        return null;
    }

    @Override
    public boolean isCurrentUserLoggedIn(Long id) {
        if(null == this.currentUserLoggedIn())
            return false;

        return this.currentUserLoggedIn().getId().equals(id);
    }
}
