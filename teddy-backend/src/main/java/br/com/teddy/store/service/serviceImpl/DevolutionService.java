package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Devolution;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.repostiory.IDevolutionRepository;
import br.com.teddy.store.service.IDevolutionService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class DevolutionService implements IDevolutionService {

    @Autowired
    IDevolutionRepository devolution;

    @Override
    public Devolution sendDevolutionRequest(Devolution devolution) {
        return null;
    }

    @Override
    public Devolution updateDevolutionRequest(Devolution devolution, Double valueWallet) {
        return null;
    }

    @Override
    public List<AttrResponseDTO> findAll() {
        return null;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return null;
    }

    @Override
    public AttrResponseDTO saveAndFlush(Devolution object) {
        return null;
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        return null;
    }
}
