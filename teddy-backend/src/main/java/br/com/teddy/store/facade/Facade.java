package br.com.teddy.store.facade;

import br.com.teddy.store.dao.IDAO;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.AttrResponseDTO;
import br.com.teddy.store.dto.FactoryResponseDTO;
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
    public AttrResponseDTO create(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        FactoryResponseDTO.hasError = false;
        FactoryResponseDTO.message = "";

        String className = domainEntity.getClass().getName();
        Map<String, List<IStrategy>> entityMap = businessRule.get(className);
        List<IStrategy> bnsEntity = entityMap.get("CREATE");

        executeRules(domainEntity, bnsEntity);


        if(stringBuilder.length() == 0 ) {
            IDAO dao = daos.get(className);
            dao.create(domainEntity);
        } else {
            FactoryResponseDTO.hasError = true;
            FactoryResponseDTO.message = stringBuilder.toString();
        }

        return FactoryResponseDTO.createDTO(domainEntity, "CREATE");
    }

    @Override
    public AttrResponseDTO delete(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        FactoryResponseDTO.message = "";
        FactoryResponseDTO.hasError = false;

        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);

        domainEntity = dao.delete(domainEntity.getId());

        return FactoryResponseDTO.createDTO(domainEntity, "DELETE");
    }

    @Override
    public AttrResponseDTO update(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        FactoryResponseDTO.hasError = false;
        FactoryResponseDTO.message = "";

        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);
        Map<String, List<IStrategy>> entityMap = businessRule.get(className);
        List<IStrategy> bnsEntity = entityMap.get("UPDATE");

        executeRules(domainEntity, bnsEntity);

        if(stringBuilder.length() > 0) {
            FactoryResponseDTO.hasError = (true);
            FactoryResponseDTO.message = stringBuilder.toString();

            return FactoryResponseDTO.createDTO(domainEntity, "UPDATE");
        }

        domainEntity = dao.update(domainEntity);

        return FactoryResponseDTO.createDTO(domainEntity, "UPDATE");
    }

    @Override
    public List<AttrResponseDTO> list(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        FactoryResponseDTO.hasError = false;
        FactoryResponseDTO.message = "";
        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);

        List<AttrResponseDTO> responseDTOList = new ArrayList<>();
        dao.list(domainEntity).forEach(d -> responseDTOList.add(FactoryResponseDTO.createDTO(d, "LIST")));

        return responseDTOList;
    }

    @Override
    public AttrResponseDTO get(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        FactoryResponseDTO.hasError = false;
        FactoryResponseDTO.message = "";

        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);

        return FactoryResponseDTO.createDTO(dao.get(domainEntity.getId()), "GET");
    }

    public AttrResponseDTO updatePassword(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        FactoryResponseDTO.hasError = false;
        FactoryResponseDTO.message = "";

        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);
        Map<String, List<IStrategy>> entityMap = businessRule.get(className);
        List<IStrategy> bnsEntity = entityMap.get("UPDATE_PASSWORD");

        executeRules(domainEntity, bnsEntity);

        if(stringBuilder.length() > 0) {
            FactoryResponseDTO.hasError = true;
            FactoryResponseDTO.message = stringBuilder.toString();
            return FactoryResponseDTO.createDTO(domainEntity, "UPDATE");
        }

        return FactoryResponseDTO.createDTO(dao.update(domainEntity), "UPDATE_PASSWORD");
    }

    public AttrResponseDTO getAllCreditCardByCustomer(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);
        FactoryResponseDTO.hasError = false;
        FactoryResponseDTO.message = "";
        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);

        return FactoryResponseDTO.createDTO(dao.get(domainEntity.getId()), "GET");
    }

}
