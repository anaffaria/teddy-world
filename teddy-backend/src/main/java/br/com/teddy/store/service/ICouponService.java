package br.com.teddy.store.service;

import br.com.teddy.store.domain.Coupon;

import java.util.List;

public interface ICouponService extends IGenericService<Coupon> {
    List<Coupon> findByCodeAndAmountGreaterThan(String code, Integer amount);
}
