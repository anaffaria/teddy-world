package br.com.teddy.store.domain;

import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass
public abstract class DomainEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private LocalDateTime createdAt;

    private LocalDateTime deletedAt;

    private LocalDateTime updatedAt;

    DomainEntity() {
        if(null == this.id) {
            this.createdAt = LocalDateTime.now();
            return;
        }
        this.updatedAt = LocalDateTime.now();
    }

    public String validate(){
        return null;
    };
}
