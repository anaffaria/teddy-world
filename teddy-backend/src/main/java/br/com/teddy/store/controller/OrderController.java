package br.com.teddy.store.controller;

import br.com.teddy.store.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class OrderController {

    @Autowired
    IOrderService orderService;

    @GetMapping("/admin/orders")
    public ResponseEntity getOrder() {
        return ResponseEntity.ok(orderService.findAll());
    }

}
