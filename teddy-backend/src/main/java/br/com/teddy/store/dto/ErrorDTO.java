package br.com.teddy.store.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ErrorDTO extends AttrResponseDTO {
    private boolean hasError = true;
    private String message;

    public ErrorDTO(String message) {
        this.message = message;
    }
}
