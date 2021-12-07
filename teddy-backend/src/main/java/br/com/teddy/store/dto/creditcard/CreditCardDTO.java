package br.com.teddy.store.dto.creditcard;

import br.com.teddy.store.domain.Address;
import br.com.teddy.store.domain.CreditCard;
import br.com.teddy.store.dto.AttrResponseDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class CreditCardDTO extends AttrResponseDTO {
    private String creditCardNumber;

    private String cardFavourite;

    private String cardFlag;

    public CreditCardDTO(CreditCard creditCard) {
        this.id = creditCard.getId();
        this.createdAt = creditCard.getCreatedAt();
        this.deletedAt = creditCard.getDeletedAt();
        this.creditCardNumber = creditCard.getCreditCardNumber().substring(creditCard.getCreditCardNumber().length() - 4);
        this.cardFavourite = creditCard.getCardFavourite();
        this.cardFlag = creditCard.getCardFlag();
    }
}
