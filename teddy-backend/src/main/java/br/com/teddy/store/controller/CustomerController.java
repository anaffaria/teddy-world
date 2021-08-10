package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Customer;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CustomerController {

    @GetMapping("/customer")
    public ResponseEntity newCustomer() {
//        Customer customer = new Customer("Ana Caroline", "123456");
        return ResponseEntity.ok("");
    }
}
