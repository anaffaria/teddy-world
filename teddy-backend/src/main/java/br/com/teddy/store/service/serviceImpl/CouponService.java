package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Coupon;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.repostiory.ICategoryRepository;
import br.com.teddy.store.service.ICouponService;
import br.com.teddy.store.service.IGenericService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CouponService implements IGenericService<Coupon>, ICouponService {

    @Autowired
    ICategoryRepository coupons;

    @Override
    public List<Coupon> findByCodeAndAmountGreaterThan(String code, Integer amount) {
        return null;
    }

    @Override
    public List<AttrResponseDTO> findAll() {
        return null;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return null;
    }

    @Override
    public AttrResponseDTO saveAndFlush(Coupon object) {
        return null;
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        return null;
    }
}
