package br.com.teddy.store.dto.order;

import br.com.teddy.store.domain.*;
import br.com.teddy.store.dto.AttrResponseDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class OrderDTO extends AttrResponseDTO {
    private Long id;
    private LocalDateTime deliveryDate;
    private LocalDateTime createdAt;
    private Double total;
    private Double shippingTax;
    private Customer customer;
    private String status;
    private List<Address> addressList;
    private Tracking tracking;
    private List<PaymentMethod> paymentMethodList;
    private List<Item> itemList;
    private Devolution devolution;

    public OrderDTO(Order order) {
        this.id = order.getId();
        this.createdAt = order.getCreatedAt();
        this.deliveryDate = order.getDeliveryDate();
        this.total = order.getTotal();
        this.shippingTax = order.getShippingTax();
        this.status = order.getStatus().getDescription();
        this.tracking = order.getTracking();
        this.itemList = order.getItemList();
        this.devolution = order.getDevolution();
    }

}
