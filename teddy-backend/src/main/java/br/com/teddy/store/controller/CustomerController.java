package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.facade.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
public class CustomerController {

    @Autowired
    private Facade facade;

    @GetMapping("/customer/{id}")
    public ResponseEntity getCustomer(@PathVariable Long id) {
        Customer customer = new Customer();
        customer.setId(id);

        return ResponseEntity.ok(facade.get(customer));
    }

    @PutMapping("/customer/{id}")
    public ResponseEntity updateCustomer(@RequestBody Customer customer) {
        return ResponseEntity.ok(facade.update(customer));
    }

    @PatchMapping("/customer/{id}")
    public ResponseEntity updateCustomerPassword(@RequestBody Customer customer) {
        return ResponseEntity.ok(facade.updatePassword(customer));
    }

    @DeleteMapping("/customer/{id}")
    public ResponseEntity deleteCustomer(@PathVariable Long id) {
        Customer customer = new Customer();
        customer.setId(id);

        return ResponseEntity.ok(facade.delete(customer));
    }

    @PostMapping("/customer")
    public ResponseEntity newCustomer(@RequestBody Customer customer) {
        return ResponseEntity.ok(facade.create(customer));
    }


    @GetMapping("/customers")
    public ResponseEntity getAllCustomer() {
        return ResponseEntity.ok(facade.list(new Customer()));
    }
}
