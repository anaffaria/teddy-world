package br.com.teddy.store.dto.customer;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ResponseDTO {
    private String fullName;
    private String email;
    private boolean hasError;
    private String message;

    public ResponseDTO(DomainEntity domainEntity) {
        if(domainEntity instanceof Customer) {
            Customer customer = (Customer) domainEntity;
            this.email = customer.getEmail();
            this.fullName = customer.getFullName();
        }
    }


}
