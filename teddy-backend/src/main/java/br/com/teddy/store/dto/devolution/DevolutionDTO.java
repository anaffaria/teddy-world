package br.com.teddy.store.dto.devolution;

import br.com.teddy.store.domain.Devolution;
import br.com.teddy.store.domain.Order;
import br.com.teddy.store.domain.StatusDevolution;
import br.com.teddy.store.dto.AttrResponseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DevolutionDTO extends AttrResponseDTO {
    private StatusDevolution statusDevolution;
    private Order order;

    public DevolutionDTO(Devolution devolution) {
        this.statusDevolution = devolution.getStatusDevolution();
        this.id = devolution.getId();
        this.createdAt = devolution.getCreatedAt();
        System.err.println(devolution.getOrder());
        Order customOrder = new Order();
        customOrder.setId(devolution.getOrder().getId());

        this.order = customOrder;
    }
}
