package br.com.teddy.store.dto.teddy;

import br.com.teddy.store.domain.Category;
import br.com.teddy.store.domain.Color;
import br.com.teddy.store.domain.Size;
import br.com.teddy.store.domain.Teddy;
import br.com.teddy.store.dto.AttrResponseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TeddyDTO extends AttrResponseDTO {
    private String image;
    private String title;
    private String subtitle;
    private Double priceReal;
    private Double priceFactory;
    private List<Color> color;
    private List<Category> category;
    private Size size;
    private boolean active;
    private Integer amount;
    private Integer amountAvailable;

    public TeddyDTO(Teddy teddy, String method) {
        this.image = teddy.getImage();
        this.title = teddy.getTitle();
        this.subtitle = teddy.getSubtitle();
        this.priceReal = teddy.getPriceReal();
        this.priceFactory = teddy.getPriceFactory();
        this.color = teddy.getColor();
        this.category = teddy.getCategory();
        this.size = teddy.getSize();
        this.active = teddy.isActive();
        this.amount = teddy.getAmountAvailable();
        this.amountAvailable = teddy.getAmountAvailable();
        this.id = teddy.getId();
        this.deletedAt = teddy.getDeletedAt();
        this.amount = teddy.getAmount();
    }
}
