package br.com.teddy.store.service;

import br.com.teddy.store.domain.Order;
import br.com.teddy.store.dto.ChartDTO;
import org.springframework.validation.BindingResult;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

public interface IOrderService extends IGenericService<Order>{
    public Order updateOrder(Order object);
    Order saveAndFlush(Order order, BindingResult result);
    ChartDTO findAllByCreatedAtBetween(Date dateInitial, Date dateFinal, Integer searchType);
    List<HashMap<String, Double>> fillCardsIndex();
}
