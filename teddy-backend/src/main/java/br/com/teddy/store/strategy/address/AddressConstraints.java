package br.com.teddy.store.strategy.address;

import br.com.teddy.store.domain.Address;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.strategy.IStrategy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressConstraints implements IStrategy {


    @Override
    public String applyBusinessRule(DomainEntity domainEntity) {

        StringBuilder stringBuilder = new StringBuilder();

        if(domainEntity instanceof Address){
            Address address = (Address) domainEntity;

            if(address.getPostalCode().trim().length() != 8){
                stringBuilder.append("CEP invalido!");
            }

        }

        return stringBuilder.toString();
    }
}
