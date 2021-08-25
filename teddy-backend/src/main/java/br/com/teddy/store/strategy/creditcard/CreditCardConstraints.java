package br.com.teddy.store.strategy.creditcard;

import br.com.teddy.store.domain.Address;
import br.com.teddy.store.domain.CreditCard;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.strategy.IStrategy;
import org.springframework.stereotype.Service;

@Service
public class CreditCardConstraints implements IStrategy {

    @Override
    public String applyBusinessRule(DomainEntity domainEntity) {

        StringBuilder stringBuilder = new StringBuilder();

        if(domainEntity instanceof CreditCard){
            CreditCard creditCard = (CreditCard) domainEntity;

            if(creditCard.getCreditCardNumber().trim().length() < 13){
                stringBuilder.append("Número do cartão invalido!");
            }

        }

        return stringBuilder.toString();
    }

}
