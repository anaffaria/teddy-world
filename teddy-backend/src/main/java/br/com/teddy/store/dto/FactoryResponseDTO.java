package br.com.teddy.store.dto;

import br.com.teddy.store.domain.Address;
import br.com.teddy.store.domain.CreditCard;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.address.AddressDTO;
import br.com.teddy.store.dto.creditcard.CreditCardDTO;
import br.com.teddy.store.dto.customer.CustomerDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public abstract class FactoryResponseDTO {

    public static boolean hasError;
    public static String message;

    public static AttrResponseDTO createDTO(DomainEntity domainEntity, String method) {
        if(hasError) {
            return new ErrorDTO(message);
        }

        if(domainEntity instanceof Customer) {
            return new CustomerDTO((Customer) domainEntity, method);
        }

        if(domainEntity instanceof Address) {
            return new AddressDTO((Address) domainEntity);
        }

        if(domainEntity instanceof CreditCard){
            return new CreditCardDTO((CreditCard) domainEntity);
        }

        return null;
    }


}
