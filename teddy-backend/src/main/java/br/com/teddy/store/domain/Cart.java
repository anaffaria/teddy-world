package br.com.teddy.store.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "_cart")
@Where(clause = "deleted_at is null")
public class Cart extends DomainEntity{
    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Item> itemList;
}
