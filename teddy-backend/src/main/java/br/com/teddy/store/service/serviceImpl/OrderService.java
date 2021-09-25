package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Order;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.ChartDTO;
import br.com.teddy.store.repostiory.*;
import br.com.teddy.store.service.IGenericService;
import br.com.teddy.store.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

public class OrderService implements IOrderService {

    @Autowired
    IOrdersRepository orders;

    @Autowired
    ICreditCardRepository creditCards;

    @Autowired
    ICustomerRepository customers;

    @Autowired
    ITeddyRepository teddy;



    @Override
    public List<AttrResponseDTO> findAll() {
        return null;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return null;
    }

    @Override
    public AttrResponseDTO saveAndFlush(Order object) {
        return null;
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        return null;
    }

    @Override
    public Order updateOrder(Order object) {
        return null;
    }

    @Override
    public Order saveAndFlush(Order order, BindingResult result) {
        return null;
    }

    @Override
    public ChartDTO findAllByCreatedAtBetween(Date dateInitial, Date dateFinal, Integer searchType) {
        return null;
    }

    @Override
    public List<HashMap<String, Double>> fillCardsIndex() {
        return null;
    }
}
