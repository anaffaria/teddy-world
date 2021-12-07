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
public class TeddyService implements IGenericService<Teddy>, ITeddyService {
    @Autowired
    ITeddyRepository teddy;

    @Autowired
    Validator validator;

    @Override
    public List<AttrResponseDTO> findAll() {
        beforeEach();
        List<AttrResponseDTO> responseDTOList = new ArrayList<>();
        teddy.findAll(Sort.by("title")).forEach(t -> responseDTOList.add(FactoryResponseDTO.createDTO(t, "LIST")));
        return responseDTOList;
    }

    @Override
    public AttrResponseDTO findById(Long id) {
        beforeEach();
        return FactoryResponseDTO.createDTO(teddy.findById(id).get(), "GET");
    }

    @Override
    public AttrResponseDTO saveAndFlush(Teddy object) {
        beforeEach();
        StringBuilder errorsMessages = new StringBuilder();

        validator.validate(object).forEach(e -> errorsMessages.append(e.getMessage() + ","));

        errorsMessages.append(object.validate());

        if(errorsMessages.length() > 0){
            System.err.println(errorsMessages);
            FactoryResponseDTO.hasError = true;
            FactoryResponseDTO.message = errorsMessages.toString();
            return FactoryResponseDTO.createDTO(object, "CREATE");
        }

        if(null != object.getId()) {
            Teddy oldTeddy = teddy.findById(object.getId()).get();

            object.setUpdatedAt(LocalDateTime.now());
            object.setCreatedAt(oldTeddy.getCreatedAt());
        }

        object.setAmountAvailable(object.getAmount());

        Teddy newTeddy = teddy.saveAndFlush(object);

        return FactoryResponseDTO.createDTO(newTeddy, "CREATE");
    }

    @Override
    public AttrResponseDTO delete(Long id) {
        beforeEach();
        Teddy oldTeddy = teddy.getById(id);

        oldTeddy.setDeletedAt(LocalDateTime.now());
        oldTeddy = teddy.saveAndFlush(oldTeddy);

        return FactoryResponseDTO.createDTO(oldTeddy, "DELETE");
    }

    @Override
    public List<Teddy> findAllByActiveTrue() {
        beforeEach();
        return teddy.findAllByActiveTrue(Sort.by("title"));
    }

    public void beforeEach() {
        FactoryResponseDTO.hasError = false;
        FactoryResponseDTO.message = null;
    }

}
