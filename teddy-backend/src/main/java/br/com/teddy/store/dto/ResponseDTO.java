package br.com.teddy.store.dto;

import br.com.teddy.store.domain.Address;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.address.AddressDTO;
import br.com.teddy.store.dto.customer.CustomerDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public abstract class ResponseDTO {
    private Long id;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime deletedAt;

    private String fullName;
    private String email;
    public static boolean hasError;
    public static String message;

    public static AResponseDTO createDTO(DomainEntity domainEntity, String method) {
        if(hasError) {
            return new ErrorDTO(hasError, message);
        }

        if(domainEntity instanceof Customer) {
            return new CustomerDTO((Customer) domainEntity, method);
        }

        if(domainEntity instanceof Address) {
            return new AddressDTO((Address) domainEntity);
        }
        return null;
    }


}
