package br.com.teddy.store.domain;

import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@Setter
@MappedSuperclass
public class DomainEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private LocalDateTime createdAt;

    private LocalDateTime deletedAt;

    private LocalDateTime updatedAt;

    DomainEntity() {
        this.createdAt = LocalDateTime.now();
    }
}
