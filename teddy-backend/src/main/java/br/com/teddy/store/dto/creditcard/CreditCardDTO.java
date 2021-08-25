package br.com.teddy.store.dto.creditcard;

import br.com.teddy.store.domain.Address;
import br.com.teddy.store.domain.CreditCard;
import br.com.teddy.store.dto.AttrResponseDTO;

public class CreditCardDTO extends AttrResponseDTO {
    private String creditCardNumber;

    private String cardHolder;

    private String cardMonth;

    private String cardYear;

    private String cardSecurity;

    private String cardFavourite;

    private String cardFlag;

    public CreditCardDTO(CreditCard creditCard) {
        this.id = creditCard.getId();
        this.createdAt = creditCard.getCreatedAt();
        this.deletedAt = creditCard.getDeletedAt();
        this.creditCardNumber = creditCard.getCreditCardNumber();
        this.cardHolder = creditCard.getCardHolder();
        this.cardMonth = creditCard.getCardMonth();
        this.cardYear = creditCard.getCardYear();
        this.cardSecurity = creditCard.getCardSecurity();
        this.cardFavourite = creditCard.getCardFavourite();
        this.cardFlag = creditCard.getCardFlag();
    }
}
