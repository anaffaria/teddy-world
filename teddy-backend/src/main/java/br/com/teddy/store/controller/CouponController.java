package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Coupon;
import br.com.teddy.store.service.ICouponService;
import br.com.teddy.store.service.ICustomerService;
import br.com.teddy.store.service.IGenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin")
public class CouponController {

    @Autowired
    IGenericService<Coupon> couponService;


    @Autowired
    ICustomerService customers;

    @GetMapping("/cupons")
    public ResponseEntity listCoupons(){
        return ResponseEntity.ok(couponService.findAll());
    }

    @PostMapping("/cupons")
    public ResponseEntity createCupon(@RequestBody Coupon coupon){
        return ResponseEntity.ok(couponService.saveAndFlush(coupon));
    }

}
