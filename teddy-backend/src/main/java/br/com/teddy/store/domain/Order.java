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
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "_order")
@Where(clause = "deleted_at is null")
public class Order extends DomainEntity{
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date deliveryDate;

    private Double total;

    private String code;

    private Double shippingTax;

    @ManyToOne
    @JoinColumn(name="customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name="status_id")
    private Status status;

    @ManyToOne
    @JoinColumn(name="address_id")
    private Address address;

    @OneToOne
    private Tracking tracking;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<PaymentMethod> paymentMethodList;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "coupon_id")
    private Coupon coupon;

    @ManyToMany
    private List<Item> itemList;

    @OneToOne(mappedBy = "order")
    private Devolution devolution;

    @Transient
    private Integer amount;

}
