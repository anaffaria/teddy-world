package br.com.teddy.store.dto;

import br.com.teddy.store.domain.*;
import br.com.teddy.store.dto.address.AddressDTO;
import br.com.teddy.store.dto.color.ColorDTO;
import br.com.teddy.store.dto.creditcard.CreditCardDTO;
import br.com.teddy.store.dto.customer.CustomerDTO;
import br.com.teddy.store.dto.teddy.TeddyDTO;
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

        if(domainEntity instanceof Teddy) {
            return new TeddyDTO((Teddy) domainEntity, method);
        }

        if(domainEntity instanceof Color) {
            return new ColorDTO((Color) domainEntity);
        }

        return null;
    }


}
