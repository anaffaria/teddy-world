package br.com.teddy.store.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;

@AllArgsConstructor
@Getter
@Setter
@Entity(name = "_wallet")
@Where(clause = "deleted_at is null")
public class Wallet extends DomainEntity{
    private double value;

    public Wallet() {
        this.value = 0d;
    }
}
