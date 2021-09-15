package br.com.teddy.store.domain;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "_stock")
@Where(clause = "deleted_at is null")
public class Stock extends DomainEntity{
    @ManyToOne
    private Teddy teddy;

    @NotNull
    @NotBlank(message = "Quantidade não pode ser nulo")
    private Integer amoInteger;

    @NotNull
    @NotBlank(message = "Código do produto não pode ser vazio")

    private String productCode;
}
