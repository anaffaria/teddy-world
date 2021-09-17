package br.com.teddy.store.dto.stock;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.Stock;
import br.com.teddy.store.dto.AttrResponseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class StockDTO extends AttrResponseDTO  {
    private Integer amoInteger;
    private String productCode;

    public StockDTO(Stock stock) {
        this.amoInteger = stock.getAmoInteger();
        this.productCode = stock.getProductCode();
    }

}
