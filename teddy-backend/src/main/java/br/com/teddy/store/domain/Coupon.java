package br.com.teddy.store.domain;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "_coupon")
@Where(clause = "deleted_at is null")
public class Coupon extends DomainEntity{

    @NotNull
    @NotBlank(message = "O código não pode estar vazio")
    @Size(min = 6)
    private String code;

    @Min(value = 1, message = "A quantidade deve ser maior que 0")
    private Integer amount;

    @Min(value = 1, message = "O Valor deve ser maior que 0")
    private Double value;

    @OneToMany(mappedBy = "coupon", targetEntity = Order.class)
    private List<Order> orderList;
}
