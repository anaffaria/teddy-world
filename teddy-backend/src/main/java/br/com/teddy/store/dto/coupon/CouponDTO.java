package br.com.teddy.store.dto.coupon;

import br.com.teddy.store.domain.Coupon;
import br.com.teddy.store.dto.AttrResponseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CouponDTO extends AttrResponseDTO {
    private String code;
    private Integer amount;
    private Double value;

    public CouponDTO(Coupon coupon) {
        this.code = coupon.getCode();
        this.amount = coupon.getAmount();
        this.value = coupon.getValue();
    }
}
