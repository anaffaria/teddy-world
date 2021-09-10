package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Color;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.FactoryResponseDTO;
import br.com.teddy.store.repostiory.IColorRepository;
import br.com.teddy.store.service.IColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ColorServiceImpl implements IColorService {
    @Autowired
    IColorRepository colorRepository;


    @Override
    public List<AttrResponseDTO> findAll() {
        List<AttrResponseDTO> responseDTOList = new ArrayList<>();
        colorRepository.findAll(Sort.by("name")).forEach(t -> responseDTOList.add(FactoryResponseDTO.createDTO(t, "LIST")));
        return responseDTOList;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return null;
    }

    @Override
    public AttrResponseDTO saveAndFlush(Color object) {
        return null;
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        return null;
    }
}
