package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Item;
import br.com.teddy.store.domain.Teddy;
import br.com.teddy.store.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/customer/{id}/cart")
public class CartController {

    @Autowired
    ICartService cartService;

    @PostMapping("")
    public ResponseEntity addCartItem(@PathVariable Long id, @RequestBody Item item) {
        Item item1 = new Item();
        item1.setTeddy(new Teddy());
        item1.setAmount(10);
        cartService.addCartItem(id, item);

        return ResponseEntity.ok(item1);
    }

}
