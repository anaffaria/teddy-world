package br.com.teddy.store.dto.category;

import br.com.teddy.store.domain.Category;
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
public class CategoryDTO extends AttrResponseDTO {
    private String name;
    private Long id;

    public CategoryDTO(Category category) {
        this.name = category.getName();
        this.id = category.getId();
    }
}
