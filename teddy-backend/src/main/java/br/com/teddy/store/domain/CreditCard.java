package br.com.teddy.store.domain;

import lombok.*;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity(name = "_creditcard")
@Where(clause = "deleted_at is null")
public class CreditCard extends DomainEntity{

    private String creditCardNumber;

    private String cardHolder;

    private String cardMonth;

    private String cardYear;

    private String cardSecurity;

    private String cardFavourite;

    private String cardFlag;

    @ManyToOne
    private Customer customer;
}
