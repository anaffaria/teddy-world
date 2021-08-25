package br.com.teddy.store.controller;

import br.com.teddy.store.domain.CreditCard;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.facade.Facade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController

public class CreditCardController {
    @Autowired
    private Facade facade;

    @GetMapping("/creditcard/{id}")
    public ResponseEntity getCreditCard(@PathVariable Long id){
        CreditCard creditCard = new CreditCard();
        creditCard.setId(id);

        return ResponseEntity.ok(facade.get(creditCard));
    }

    @DeleteMapping("/creditcard/{id}")
    public ResponseEntity deleteCreditCard(@PathVariable Long id) {
        CreditCard creditCard = new CreditCard();
        creditCard.setId(id);

        return ResponseEntity.ok(facade.delete(creditCard));
    }

    @PostMapping("/creditcard")
    public ResponseEntity newCreditCard(@RequestBody CreditCard creditCard) {
        return ResponseEntity.ok(facade.create(creditCard));
    }

    @GetMapping("/creditcards")
    public ResponseEntity getAllCreditCard() {
        return ResponseEntity.ok(facade.list(new CreditCard()));
    }
}
