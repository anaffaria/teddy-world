package br.com.teddy.store.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Status {
    PROCESSING("Processando"), DELIVERY_PROCESS("Em Transporte"),
    DELIVERED("Entregue"), WAITING_CHANGE("Aguardando Troca"),
    CHANGE_REFUSED("Troca Recusada"), CHANGE_APPROVED("Troca Aprovada"),
    CHANGE_PROCESS("Em Processo de Troca");

    private final String description;
}
