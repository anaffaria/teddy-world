package br.com.teddy.store.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class ChartDTO {
    private List<String> labels;
    private List<DataSetDTO> datasets;
}
