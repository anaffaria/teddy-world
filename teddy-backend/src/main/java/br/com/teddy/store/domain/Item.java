package br.com.teddy.store.domain;

import lombok.*;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "_item")
@Where(clause = "deleted_at is null")
@ToString
public class Item extends DomainEntity{

    @ManyToOne
    private Teddy teddy;

    private Integer amount;
}
