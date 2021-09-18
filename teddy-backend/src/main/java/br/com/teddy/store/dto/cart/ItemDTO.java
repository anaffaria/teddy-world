package br.com.teddy.store.dto.cart;

import br.com.teddy.store.dto.teddy.TeddyDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ItemDTO {
    private TeddyItemDTO teddyItemDTO;
    private Integer amount;
}
