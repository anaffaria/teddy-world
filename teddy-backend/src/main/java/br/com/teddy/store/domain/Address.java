package br.com.teddy.store.domain;

import lombok.*;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity(name = "_address")
@Where(clause = "deleted_at is null")
public class Address extends DomainEntity{

    @NotBlank(message = "Logradouro não pode estar em branco")
    @NotNull(message = "Logradouro não pode estar nulo")
    private String street;

    @NotBlank(message = "Número do endereço não pode estar em branco")
    @NotNull(message = "Número do endereço não pode estar em branco")
    private String number;

    private String neighborhood;

    @NotBlank(message = "CEP não pode estar em branco")
    @NotNull(message = "CEP não pode estar nulo")
    private String postalCode;

    private String complement;

    @NotBlank(message = "Cidade não pode estar em branco")
    @NotNull(message = "Cidade não pode estar nulo")
    private String city;

    @NotBlank(message = "Estado não pode estar em branco")
    @NotNull(message = "Estado não pode estar nulo")
    private String state;

    @NotBlank(message = "País não pode estar em branco")
    @NotNull(message = "País não pode estar nulo")
    private String country;

    @Enumerated(EnumType.ORDINAL)
    private AddressType addressType;

    @ManyToOne
    private Customer customer;
}
