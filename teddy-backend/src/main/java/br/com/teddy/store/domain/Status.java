package br.com.teddy.store.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Status {
    PROCESSING("0cm a 20cm"), DELIVERY_PROCESS("21cm a 40cm"),
    DELIVERED("41cm a 60cm"), WAITING_CHANGE("61cm a 90cm"),
    CHANGE_REFUSED("91cm a 2metros"), CHANGE_APPROVED("61cm a 90cm"),
    CHANGE_PROCESS("61cm a 90cm");

    private final String description;
}
