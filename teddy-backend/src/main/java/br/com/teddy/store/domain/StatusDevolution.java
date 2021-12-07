package br.com.teddy.store.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum StatusDevolution {
    WAITING_ANSWER("Aguardando resposta"),
    IN_PROCESS("Em processo de troca"),
    ACCEPTED("Aceito"),
    REFUSED("Recusado");

    private final String description;
}
