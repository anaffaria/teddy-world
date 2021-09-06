package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.Teddy;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.FactoryResponseDTO;
import br.com.teddy.store.repostiory.ITeddyRepository;
import br.com.teddy.store.service.IGenericService;
import br.com.teddy.store.service.ITeddyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import javax.validation.Validator;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class TeddyServiceImpl implements IGenericService<Teddy>, ITeddyService {
    @Autowired
    ITeddyRepository teddy;

    @Autowired
    Validator validator;

    @Override
    public List<AttrResponseDTO> findAll() {
        List<AttrResponseDTO> responseDTOList = new ArrayList<>();
        teddy.findAll(Sort.by("title")).forEach(t -> responseDTOList.add(FactoryResponseDTO.createDTO(t, "LIST")));
        return responseDTOList;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        return FactoryResponseDTO.createDTO(teddy.findById(id).get(), "GET");
    }

    @Override
    public AttrResponseDTO saveAndFlush(Teddy object) {
        StringBuilder errorsMessages = new StringBuilder();
        Teddy oldTeddy = teddy.findById(object.getId()).get();

        validator.validate(object).forEach(e -> errorsMessages.append(e.getMessage() + ","));

        if(errorsMessages.length() > 0){
            System.err.println(errorsMessages);
            FactoryResponseDTO.hasError = true;
            FactoryResponseDTO.message = errorsMessages.toString();
            return FactoryResponseDTO.createDTO(object, "CREATE");
        }

        if(null != object.getId()) {
            object.setUpdatedAt(LocalDateTime.now());
            object.setCreatedAt(oldTeddy.getCreatedAt());
        }

        Teddy newTeddy = teddy.saveAndFlush(object);

        return FactoryResponseDTO.createDTO(newTeddy, "CREATE");
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        Teddy oldTeddy = teddy.getById(id);

        oldTeddy.setDeletedAt(LocalDateTime.now());
        oldTeddy = teddy.saveAndFlush(oldTeddy);

        return FactoryResponseDTO.createDTO(oldTeddy, "DELETE");
    }

    @Override
    public List<Teddy> findAllByActiveTrue() {
        return teddy.findAllByActiveTrue(Sort.by("title"));
    }
}
