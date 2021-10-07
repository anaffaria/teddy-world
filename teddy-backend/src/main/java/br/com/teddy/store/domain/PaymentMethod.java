package br.com.teddy.store.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "_payment_method")
@Where(clause = "deleted_at is null")
public class PaymentMethod extends DomainEntity{

    private Double paymentValue;

    @ManyToOne
    @JoinColumn(name= "credit_card_id")
    private CreditCard creditCard;

}
