package br.com.teddy.store.domain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Where;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.Temporal;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@Entity(name = "_order")
@Where(clause = "deleted_at is null")
public class Order extends DomainEntity{
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime deliveryDate;

    private Double total;

    private String code;

    private Double shippingTax;

    @ManyToOne
    @JoinColumn(name="customer_id")
    private Customer customer;

    @Enumerated(EnumType.ORDINAL)
    private Status status;

    @ManyToMany
    private List<Address> addressList;

    @OneToOne
    private Tracking tracking;

    @ManyToMany(cascade = {CascadeType.ALL, CascadeType.MERGE})
    private List<PaymentMethod> paymentMethodList;

    @ManyToOne
    @JoinColumn(name = "coupon_id")
    private Coupon coupon;

    @ManyToMany
    private List<Item> itemList;

    @OneToOne(mappedBy = "order")
    private Devolution devolution;

    @Transient
    private Integer amount;

    public Order() {
        this.status = Status.PROCESSING;
    }

    @Override
    @Transient
    public String validate() {
        StringBuilder stringBuilder = new StringBuilder();
        Double totalReceived = paymentMethodList.stream().mapToDouble(p -> p.getPaymentValue()).sum();
        Double totalItemsValue = itemList.stream().mapToDouble(i -> i.getAmount() * i.getTeddy().getPriceFactory()).sum();

        if(null == total || total <= 0) {
            stringBuilder.append("O valor total da compra não pode ser nulo ou menor que 0");
        }

        if(addressList.size() < 2) {
            stringBuilder.append("Para solicitar o pedido é necessário 1 endereço para entrega e outro para cobrança");
        }



        return stringBuilder.toString();
    }
}
