package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Wallet;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.service.IGenericService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class WalletService implements IGenericService<Wallet> {

    @Autowired
    Wallet wallets;

    @Override
    public List<AttrResponseDTO> findAll() {
        return null;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return null;
    }

    @Override
    public AttrResponseDTO saveAndFlush(Wallet object) {
        return null;
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        return null;
    }
}
