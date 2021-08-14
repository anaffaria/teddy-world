package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Address;
import br.com.teddy.store.facade.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AddressController {

    @Autowired
    Facade facade;

    @GetMapping("/address/{id}")
    public ResponseEntity getAddress(@PathVariable Long id){
        Address address = new Address();
        address.setId(id);

        return ResponseEntity.ok(facade.get(address));
    }

    @PutMapping("/address/{id}")
    public ResponseEntity updateAddress(@RequestBody Address address) {
        return ResponseEntity.ok(facade.update(address));
    }

    @DeleteMapping("/address/{id}")
    public ResponseEntity deleteAddress(@PathVariable Long id) {
        Address address = new Address();
        address.setId(id);

        return ResponseEntity.ok(facade.delete(address));
    }

    @PostMapping("/address")
    public ResponseEntity newAddress(@RequestBody Address address) {
        return ResponseEntity.ok(facade.create(address));
    }


    @GetMapping("/address")
    public ResponseEntity getAllAddress() {
        return ResponseEntity.ok(facade.list(new Address()));
    }
}
