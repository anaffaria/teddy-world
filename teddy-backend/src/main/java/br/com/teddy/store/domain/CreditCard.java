package br.com.teddy.store.domain;

import lombok.*;

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
