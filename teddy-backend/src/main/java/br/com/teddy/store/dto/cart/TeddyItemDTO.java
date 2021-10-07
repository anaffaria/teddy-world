package br.com.teddy.store.dto.cart;

import br.com.teddy.store.domain.Size;
import br.com.teddy.store.domain.Teddy;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TeddyItemDTO {
    private Long id;
    private String image, title, subtile;
    private Double priceReal;
    private Double priceFactory;
    private Size size;
    private Integer amountAvailable;

    public TeddyItemDTO(Teddy teddy) {
        this.id = teddy.getId();
        this.image = teddy.getImage();
        this.priceReal = teddy.getPriceReal();
        this.priceFactory = teddy.getPriceFactory();
        this.size = teddy.getSize();
        this.amountAvailable = teddy.getAmountAvailable();
        this.title = teddy.getTitle();
        this.subtile = teddy.getSubtitle();
    }
}
