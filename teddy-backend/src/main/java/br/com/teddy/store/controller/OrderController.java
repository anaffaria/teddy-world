package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.Order;
import br.com.teddy.store.service.ICustomerService;
import br.com.teddy.store.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("")
public class OrderController {

    @Autowired
    IOrderService orderService;

    @Autowired
    ICustomerService customerService;

    @GetMapping("/admin/orders")
    public ResponseEntity getOrder() {
        return ResponseEntity.ok(orderService.findAll());
    }

    @PatchMapping("/admin/orders")
    public ResponseEntity updateOrderStatus(@RequestBody Order order) {
        return ResponseEntity.ok(orderService.updateOrder(order));
    }

    @DeleteMapping("/customer/{id}/order/{orderID}")
    public ResponseEntity deleteOrder(@PathVariable Long id, @PathVariable Long orderID) {
        if(!customerService.isCurrentUserLoggedIn(id)) {
            return ResponseEntity.status(403).body("");
        }
        return ResponseEntity.ok(orderService.delete(orderID));
    }
}
