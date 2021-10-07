package br.com.teddy.store.dto.customer;

import br.com.teddy.store.domain.Cart;
import br.com.teddy.store.domain.CreditCard;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.address.AddressDTO;
import br.com.teddy.store.dto.cart.CartDTO;
import br.com.teddy.store.dto.creditcard.CreditCardDTO;
import br.com.teddy.store.dto.order.OrderDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CustomerDTO extends AttrResponseDTO {
    private String fullName;
    private LocalDate birthDate;
    private String email;
    private String cpf;
    private String telNumber;
    private Integer gender;
    private List<AddressDTO> addressList = new ArrayList<>();
    private CartDTO cart;
    private List<CreditCardDTO> creditCardList = new ArrayList<>();
    private List<OrderDTO> ordersDTOS = new ArrayList<>();

    public CustomerDTO(Customer customer, String method) {
        this.id = customer.getId();
        this.createdAt = customer.getCreatedAt();
        this.deletedAt = customer.getDeletedAt();
        this.fullName = customer.getFullName();
        this.email = customer.getEmail();
        this.gender = customer.getGender().ordinal();
        this.cpf = customer.getCpf();
        this.telNumber = customer.getTelNumber();
        this.birthDate = customer.getBirthDate();
        this.cart = new CartDTO(customer.getCart());

        if(method.equals("GET")){
            customer.getAddressList().forEach(a -> addressList.add(new AddressDTO(a)));
            customer.getCreditCardList().forEach(c -> creditCardList.add(new CreditCardDTO(c)));
            customer.getOrderList().forEach(o -> ordersDTOS.add(new OrderDTO(o)));
        }
    }
}
