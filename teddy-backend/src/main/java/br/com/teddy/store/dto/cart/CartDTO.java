package br.com.teddy.store.dto.cart;

import br.com.teddy.store.domain.Cart;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CartDTO {
    private List<ItemDTO> itemDTOS;

    public CartDTO(Cart cart) {
        ArrayList<ItemDTO> itemDTOArrayList = new ArrayList<>();
        cart.getItemList().forEach(i -> itemDTOArrayList.add(new ItemDTO(i)));

        this.itemDTOS = itemDTOArrayList;
    }
}
