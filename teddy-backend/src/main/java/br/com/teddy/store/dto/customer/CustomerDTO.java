package br.com.teddy.store.dto.customer;

import br.com.teddy.store.domain.Customer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CustomerDTO {
    private String fullName;
    private String email;

    CustomerDTO(Customer customer) {
        this.email = customer.getEmail();
        this.fullName = customer.getFullName();
    }
}
