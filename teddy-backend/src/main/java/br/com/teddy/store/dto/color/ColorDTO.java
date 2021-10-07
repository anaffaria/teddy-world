package br.com.teddy.store.dto.color;

import br.com.teddy.store.domain.Color;
import br.com.teddy.store.dto.AttrResponseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ColorDTO extends AttrResponseDTO {
    private String name;
    private Long id;

    public ColorDTO(Color color) {
        this.name = color.getName();
        this.id = color.getId();
    }

}
