package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Coupon;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.FactoryResponseDTO;
import br.com.teddy.store.repostiory.ICouponsRepository;
import br.com.teddy.store.service.ICouponService;
import br.com.teddy.store.service.IGenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CouponService implements IGenericService<Coupon>, ICouponService {

    @Autowired
    ICouponsRepository coupons;

    @Override
    public List<Coupon> findByCodeAndAmountGreaterThan(String code, Integer amount) {
        return coupons.findByCodeAndAmountGreaterThan(code, amount = 0);
    }

    @Override
    public List<AttrResponseDTO> findAll() {
        List<AttrResponseDTO> responseDTOList = new ArrayList<>();
        coupons.findAll(Sort.by("code")).forEach(t -> responseDTOList.add(FactoryResponseDTO.createDTO(t, "LIST")));
        return responseDTOList;
    }

    @Override
    public AttrResponseDTO findById(Long id)  {
        return FactoryResponseDTO.createDTO(coupons.findById(id).get(), "GET");
    }

    @Override
    public AttrResponseDTO saveAndFlush(Coupon object) {
        return FactoryResponseDTO.createDTO( coupons.saveAndFlush(object), "CREATE");
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        return null;
    }
}
