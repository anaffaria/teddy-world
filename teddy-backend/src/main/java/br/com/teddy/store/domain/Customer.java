package br.com.teddy.store.domain;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity(name = "_customer")
public class Customer extends DomainEntity{
    @NotNull(message = "Nome não pode ser vazio")
    @NotBlank(message = "Nome não pode estar em branco")
    private String fullName;

    @Email(message = "Insira um e-mail válido")
//    @Column(unique = true)
    private String email;

    private String cpf;

    private String gender;

    private LocalDateTime birthDate;

    private String telephone;

    private String password;
    @Transient
    private String passwordConfirm;

    @OneToMany(mappedBy = "customer", targetEntity = Address.class)
    private List<Address> addressList;
}
