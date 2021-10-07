package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Category;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.FactoryResponseDTO;
import br.com.teddy.store.repostiory.ICategoryRepository;
import br.com.teddy.store.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    ICategoryRepository categoryRepository;

    @Override
    public List<AttrResponseDTO> findAll() {
        List<AttrResponseDTO> responseDTOList = new ArrayList<>();
        categoryRepository.findAll(Sort.by("name")).forEach(t -> responseDTOList.add(FactoryResponseDTO.createDTO(t, "LIST")));
        return responseDTOList;

    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return null;
    }

    @Override
    public AttrResponseDTO saveAndFlush(Category object) {
        return null;
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        return null;
    }
}
