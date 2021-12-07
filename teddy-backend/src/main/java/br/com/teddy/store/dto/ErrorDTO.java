package br.com.teddy.store.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ErrorDTO extends AttrResponseDTO {
    private boolean hasError = true;
    private String message;
    private List<String> errorsMessages;

    public ErrorDTO(String message) {
        this.message = message;
    }

    public ErrorDTO(List<String> errorsMessages) {
        this.errorsMessages = errorsMessages;
    }
}
