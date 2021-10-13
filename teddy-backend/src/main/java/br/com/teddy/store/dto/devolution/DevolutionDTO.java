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
    private String reason, answer;

    public DevolutionDTO(Devolution devolution, String method) {
        this.statusDevolution = devolution.getStatusDevolution();
        this.id = devolution.getId();
        this.createdAt = devolution.getCreatedAt();
        this.reason = devolution.getReason();
        this.answer = devolution.getAnswer();

        Order customOrder = new Order();
        customOrder.setId(devolution.getOrder().getId());
        customOrder.setItemList(devolution.getOrder().getItemList());
        customOrder.setTotal(devolution.getOrder().getTotal());

        this.order = customOrder;
    }
}
