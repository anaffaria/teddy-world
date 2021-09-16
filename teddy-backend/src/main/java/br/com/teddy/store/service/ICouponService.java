package br.com.teddy.store.service;

import br.com.teddy.store.domain.Coupon;

import java.util.List;

public interface ICouponService {
    List<Coupon> findByCodeAndAmountGreaterThan(String code, Integer amount);
}
