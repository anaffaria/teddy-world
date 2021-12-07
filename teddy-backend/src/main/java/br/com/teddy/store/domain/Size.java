package br.com.teddy.store.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Size {
    oneSize("0cm a 20cm"), twoSize("21cm a 40cm"),
    treeSize("41cm a 60cm"), fourSize("61cm a 90cm"), fiveSize("91cm a 2metros");

    private final String description;
}
