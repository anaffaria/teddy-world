package br.com.teddy.store.dto.cart;

import br.com.teddy.store.domain.Item;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ItemDTO {
    private Long id;
    private TeddyItemDTO teddyItemDTO;
    private Integer amount;

    public ItemDTO(Item item) {
        this.id = item.getId();
        this.teddyItemDTO = new TeddyItemDTO(item.getTeddy());
        this.amount = item.getAmount();
    }
}
