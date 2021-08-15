package br.com.teddy.store.facade;

import br.com.teddy.store.dao.IDAO;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.AResponseDTO;
import br.com.teddy.store.dto.ResponseDTO;
import br.com.teddy.store.strategy.IStrategy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class Facade extends AbstractFacade implements IFacade{

    private StringBuilder stringBuilder = new StringBuilder();

    private void executeRules(DomainEntity domainEntity, List<IStrategy> bnsRules) {
        for (IStrategy bnsRule : bnsRules) {
            String msg = bnsRule.applyBusinessRule(domainEntity);
            if (msg != null) {
                stringBuilder.append(msg);
            }
        }
    }

    @Override
    public AResponseDTO create(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        ResponseDTO.hasError = false;
        ResponseDTO.message = "";

        String className = domainEntity.getClass().getName();
        Map<String, List<IStrategy>> entityMap = businessRule.get(className);
        List<IStrategy> bnsEntity = entityMap.get("CREATE");

        executeRules(domainEntity, bnsEntity);


        if(stringBuilder.length() == 0 ) {
            IDAO dao = daos.get(className);
            dao.create(domainEntity);
        } else {
            ResponseDTO.hasError = true;
            ResponseDTO.message = stringBuilder.toString();
        }

        return ResponseDTO.createDTO(domainEntity, "CREATE");
    }

    @Override
    public AResponseDTO delete(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        ResponseDTO.message = "";
        ResponseDTO.hasError = false;

        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);

        domainEntity = dao.delete(domainEntity.getId());

        return ResponseDTO.createDTO(domainEntity, "DELETE");
    }

    @Override
    public AResponseDTO update(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        ResponseDTO.hasError = false;
        ResponseDTO.message = "";

        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);
        Map<String, List<IStrategy>> entityMap = businessRule.get(className);
        List<IStrategy> bnsEntity = entityMap.get("UPDATE");

        executeRules(domainEntity, bnsEntity);

        if(stringBuilder.length() > 0) {
            ResponseDTO.hasError = (true);
            ResponseDTO.message = stringBuilder.toString();

            return ResponseDTO.createDTO(domainEntity, "UPDATE");
        }

        dao.update(domainEntity);

        return ResponseDTO.createDTO(domainEntity, "UPDATE");
    }

    @Override
    public List<AResponseDTO> list(DomainEntity domainEntity) {
        super.initialize();
        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);

        List<AResponseDTO> responseDTOList = new ArrayList<>();
        dao.list(domainEntity).forEach(d -> responseDTOList.add(ResponseDTO.createDTO(d, "LIST")));

        return responseDTOList;
    }

    @Override
    public AResponseDTO get(DomainEntity domainEntity) {
        super.initialize();
        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);

        return ResponseDTO.createDTO(dao.get(domainEntity.getId()), "GET");
    }

    public AResponseDTO updatePassword(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        ResponseDTO.hasError = false;
        ResponseDTO.message = "";

        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);
        Map<String, List<IStrategy>> entityMap = businessRule.get(className);
        List<IStrategy> bnsEntity = entityMap.get("UPDATE_PASSWORD");

        executeRules(domainEntity, bnsEntity);

        if(stringBuilder.length() > 0) {
            ResponseDTO.hasError = true;
            ResponseDTO.message = stringBuilder.toString();
            return ResponseDTO.createDTO(domainEntity, "UPDATE");
        }

        return ResponseDTO.createDTO(dao.update(domainEntity), "UPDATE_PASSWORD");
    }
}
