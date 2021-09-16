package br.com.teddy.store.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Random;

@Getter
@Setter
@AllArgsConstructor
public class DataSetDTO {
    private String label;
    private List<Double> data ;
    private String borderColor;
    private String backgroundColor;

    public DataSetDTO() {
        Random random = new Random();
        this.borderColor = "#" + random.nextInt(900) + 100;
        this.backgroundColor = "rgba(255,255,255,0)";
    }
}
