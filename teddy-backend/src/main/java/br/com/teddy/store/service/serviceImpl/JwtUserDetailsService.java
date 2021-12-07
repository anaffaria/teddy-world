package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.model.UserAuth;
import br.com.teddy.store.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    ICustomerService customerService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Customer> customer = customerService.findByEmail(email);

        customer.orElseThrow(() -> new UsernameNotFoundException("Not found email: " + email));

        return customer.map(UserAuth::new).get();
    }
}
