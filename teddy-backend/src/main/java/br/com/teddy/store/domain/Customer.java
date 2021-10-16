package br.com.teddy.store.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


@AllArgsConstructor
@Getter
@Setter
@Entity(name = "_customer")
@Where(clause = "deleted_at is null")
public class Customer extends DomainEntity{
    @NotNull(message = "Nome não pode ser vazio")
    @NotBlank(message = "Nome não pode estar em branco")
    private String fullName;

    @Email(message = "Insira um e-mail válido")
    @Column(unique = true)
    private String email;

    private String cpf;

    @Enumerated(EnumType.ORDINAL)
    private Gender gender;

    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate birthDate;

    private String telNumber;

    private String password;
    @Transient
    private String passwordConfirm;

    @Transient
    private String newPassword;

    private String roles;

    @OneToMany(mappedBy = "customer", targetEntity = Address.class)
    private List<Address> addressList;

    @OneToMany(mappedBy = "customer", targetEntity = CreditCard.class, cascade = CascadeType.ALL)
    private List<CreditCard> creditCardList;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Cart cart;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private Wallet wallet;

    @OneToMany(mappedBy = "customer", targetEntity = Order.class)
    private List<Order> orderList;

    public Customer() {
        this.setRoles("ROLE_CUSTOMER");
        this.cart = new Cart();
        this.wallet = new Wallet();
    }

}
