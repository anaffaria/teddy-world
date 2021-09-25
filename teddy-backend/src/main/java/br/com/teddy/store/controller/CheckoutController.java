package br.com.teddy.store.controller;

import br.com.teddy.store.service.IFretenatorService;
import br.com.teddy.store.utils.correiostools.Fretenator;
import br.com.teddy.store.utils.correiostools.FretenatorResult;
import br.com.teddy.store.utils.correiostools.FretenatorResultItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/customer/{id}/cart")
public class CheckoutController {

    @Autowired
    IFretenatorService fretenatorService;

    @GetMapping("/calculatetax")
    public ResponseEntity calculateTax(@RequestParam("postalcode") String postalCode) {
        try {
            return ResponseEntity.ok(fretenatorService.calculateTax(postalCode));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
