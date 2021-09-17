package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Coupon;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICouponsRepository extends JpaRepository<Coupon, Long> {
    List<Coupon> findByCodeAndAmountGreaterThan(String code, Integer amount);
}
