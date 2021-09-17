package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Stock;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.FactoryResponseDTO;
import br.com.teddy.store.repostiory.IStocksRepository;
import br.com.teddy.store.service.IStockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;

import java.util.ArrayList;
import java.util.List;

public class StockService implements IStockService {

    @Autowired
    IStocksRepository stocks;



    @Override
    public List<AttrResponseDTO> findAll() {
        return null;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return null;
    }

    @Override
    public AttrResponseDTO saveAndFlush(Stock object) {
        return null;
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        return null;
    }
}
