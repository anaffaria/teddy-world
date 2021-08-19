package br.com.teddy.store.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Gender {
    MALE("Masculino"), FEMALE("Feminino"), OTHER("Outros");

    private final String description;
}
