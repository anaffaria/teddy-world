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
@Entity(name = "_color")
@Where(clause = "deleted_at is null")
public class Color extends DomainEntity{

    private String name;

    @ManyToMany
    private List<Teddy> teddy;
}
