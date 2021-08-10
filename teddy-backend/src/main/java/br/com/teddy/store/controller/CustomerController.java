package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.facade.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class CustomerController {

    @Autowired
    private Facade facade;

    @PostMapping("/customer")
    public ResponseEntity newCustomer(@RequestBody Customer customer) {
        return ResponseEntity.ok(facade.create(customer));
    }

    @GetMapping("/customer")
    public ResponseEntity getAllCustomer() {
        return ResponseEntity.ok("");
    }
}
