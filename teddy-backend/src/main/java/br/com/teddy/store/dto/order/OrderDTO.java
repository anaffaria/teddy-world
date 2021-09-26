package br.com.teddy.store.dto.order;

import br.com.teddy.store.domain.*;
import br.com.teddy.store.dto.AttrResponseDTO;
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
    private LocalDateTime deliveryDate;
    private Double total;
    private Double shippingTax;
    private Customer customer;
    private Status status;
    private List<Address> addressList;
    private Tracking tracking;
    private List<PaymentMethod> paymentMethodList;
    private List<Item> itemList;
    private Devolution devolution;

    public OrderDTO(Order order) {
        this.deliveryDate = order.getDeliveryDate();
        this.total = order.getTotal();
        this.shippingTax = order.getShippingTax();
        this.customer = order.getCustomer();
        this.status = order.getStatus();
        this.addressList = order.getAddressList();
        this.tracking = order.getTracking();
        this.paymentMethodList = order.getPaymentMethodList();
        this.itemList = order.getItemList();
        this.devolution = order.getDevolution();
    }

}
