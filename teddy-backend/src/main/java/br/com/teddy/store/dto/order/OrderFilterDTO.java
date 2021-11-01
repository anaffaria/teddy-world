package br.com.teddy.store.dto.order;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@Getter
@Setter
public class OrderFilterDTO {
    String name;
    Date created_at;
    Long count;
}
