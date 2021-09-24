package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Item;
import br.com.teddy.store.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/customer/{id}/cart")
public class CartController {

    @Autowired
    ICartService cartService;

    @PostMapping("")
    public ResponseEntity addCartItem(@PathVariable Long id, @RequestBody Item item) {
        try {
            cartService.addCartItem(id, item);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }

        return ResponseEntity.ok(item);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity removeCartItem(@PathVariable Long id, @PathVariable Long itemID) {
        cartService.removeCartItem(id, itemID);

        return ResponseEntity.ok("ok");
    }

    @PatchMapping("")
    public ResponseEntity updateCartItemAmount(@PathVariable Long id, @RequestBody Item item) {
        cartService.updateCartItemAmount(id, item);
        return ResponseEntity.ok("ok");
    }
}
