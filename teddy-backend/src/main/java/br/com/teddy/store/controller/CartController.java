package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Item;
import br.com.teddy.store.repostiory.ICustomerRepository;
import br.com.teddy.store.service.ICartService;
import br.com.teddy.store.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/customer/{id}/cart")
public class CartController {

    @Autowired
    ICartService cartService;

    @Autowired
    ICustomerService customerService;

    @PostMapping("")
    public ResponseEntity addCartItem(@PathVariable Long id, @RequestBody Item item) {
        if(!customerService.isCurrentUserLoggedIn(id)) {
            return ResponseEntity.status(403).body("");
        }
        try {
            cartService.addCartItem(id, item);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        return ResponseEntity.ok(item);
    }

    @DeleteMapping("/{itemID}")
    public ResponseEntity removeCartItem(@PathVariable Long id, @PathVariable Long itemID) {
        if(!customerService.isCurrentUserLoggedIn(id)) {
            return ResponseEntity.status(403).body("");
        }
        cartService.removeCartItem(id, itemID);

        return ResponseEntity.ok("ok");
    }

    @PatchMapping("")
    public ResponseEntity updateCartItemAmount(@PathVariable Long id, @RequestBody Item item) {
        if(!customerService.isCurrentUserLoggedIn(id)) {
            return ResponseEntity.status(403).body("");
        }
        cartService.updateCartItemAmount(id, item);
        return ResponseEntity.ok("ok");
    }
}
