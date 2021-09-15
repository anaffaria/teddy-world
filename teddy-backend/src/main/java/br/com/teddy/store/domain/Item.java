package br.com.teddy.store.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "_item")
@Where(clause = "deleted_at is null")
public class Item extends DomainEntity{

    @ManyToOne
    private Teddy teddy;

    private Integer amount;
}
