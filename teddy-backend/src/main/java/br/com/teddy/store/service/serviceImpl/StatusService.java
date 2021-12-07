package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Status;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.service.IGenericService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class StatusService implements IGenericService<Status> {
    @Override
    public List<AttrResponseDTO> findAll() {
        return null;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return null;
    }

    @Override
    public AttrResponseDTO saveAndFlush(Status object) {
        return null;
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        return null;
    }
}
