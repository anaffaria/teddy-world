package br.com.teddy.store.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

@Getter
@Setter
@ToString
@Entity(name = "_category")
@Where(clause = "deleted_at is null")
public class Category extends DomainEntity{

    private String name;

    @ManyToMany
    private List<Teddy> teddy;
}
