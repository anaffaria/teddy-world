package br.com.teddy.store.dto.customer;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.address.AddressDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CustomerDTO extends AttrResponseDTO {
    private String fullName;
    private LocalDateTime birthDate;
    private String email;
    private String cpf;
    private String telephone;
    private String gender;
    private List<AddressDTO> addressList = new ArrayList<>();

    public CustomerDTO(Customer customer, String method) {
        this.id = customer.getId();
        this.createdAt = customer.getCreatedAt();
        this.deletedAt = customer.getDeletedAt();
        this.fullName = customer.getFullName();
        this.email = customer.getEmail();
        this.gender = customer.getGender();
        this.cpf = customer.getCpf();
        this.telephone = customer.getTelephone();
        this.birthDate = customer.getBirthDate();

        if(method.equals("GET")){
            customer.getAddressList().forEach(a -> addressList.add(new AddressDTO(a)));
        }
    }
}
