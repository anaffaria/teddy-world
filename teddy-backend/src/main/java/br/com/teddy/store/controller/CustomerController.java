package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.facade.Facade;
import br.com.teddy.store.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class CustomerController {

    @Autowired
    private Facade facade;

    @Autowired
    private ICustomerService customerService;

    @GetMapping("/customer/{id}")
    public ResponseEntity getCustomer(@PathVariable Long id) {
        if(!customerService.isCurrentUserLoggedIn(id)) {
            return ResponseEntity.status(403).body("");
        }
        Customer customer = new Customer();
        customer.setId(id);

        return ResponseEntity.ok(facade.get(customer));
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/customer")
    public ResponseEntity updateCustomer(@RequestBody Customer customer) {
        if(!customerService.isCurrentUserLoggedIn(customer.getId())) {
            return ResponseEntity.status(403).body("");
        }
        return ResponseEntity.ok(facade.update(customer));
    }

    @PatchMapping("/customer")
    public ResponseEntity updateCustomerPassword(@RequestBody Customer customer) {
        Customer loggedUser = customerService.currentUserLoggedIn();

        if(!customerService.isCurrentUserLoggedIn(customer.getId())) {
            return ResponseEntity.status(403).body("");
        }
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
        Customer customer = customerService.currentUserLoggedIn();

        if(!customer.getRoles().contains("ROLE_ADMIN")) {
            return ResponseEntity.status(403).body("");
        }

        return ResponseEntity.ok(facade.list(new Customer()));
    }
}

