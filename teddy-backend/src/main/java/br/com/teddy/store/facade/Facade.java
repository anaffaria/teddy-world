package br.com.teddy.store.facade;

import br.com.teddy.store.dao.IDAO;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.customer.ResponseDTO;
import br.com.teddy.store.strategy.IStrategy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class Facade extends AbstractFacade implements IFacade{

    private StringBuilder stringBuilder = new StringBuilder();
    private ResponseDTO responseDTO;

    private void executeRules(DomainEntity domainEntity, List<IStrategy> bnsRules) {
        for (IStrategy bnsRule : bnsRules) {
            String msg = bnsRule.applyBusinessRule(domainEntity);
            if (msg != null) {
                stringBuilder.append(msg);
            }
        }
    }

    @Override
    public ResponseDTO create(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);

        String className = domainEntity.getClass().getName();
        Map<String, List<IStrategy>> entityMap = businessRule.get(className);
        List<IStrategy> bnsEntity = entityMap.get("CREATE");

        executeRules(domainEntity, bnsEntity);

        responseDTO = new ResponseDTO(domainEntity);

        if(stringBuilder.length() == 0 ) {
            IDAO dao = daos.get(className);
            dao.create(domainEntity);
        } else {
            responseDTO.setHasError(true);
            responseDTO.setMessage(stringBuilder.toString());
        }

        return responseDTO;
    }

    @Override
    public ResponseDTO delete(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);

        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);

        domainEntity = dao.delete(domainEntity.getId());

        return new ResponseDTO(domainEntity);
    }

    @Override
    public ResponseDTO update(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);

        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);
        Map<String, List<IStrategy>> entityMap = businessRule.get(className);
        List<IStrategy> bnsEntity = entityMap.get("UPDATE");

        executeRules(domainEntity, bnsEntity);

        responseDTO = new ResponseDTO();

        if(stringBuilder.length() > 0) {
            responseDTO.setHasError(true);
            responseDTO.setMessage(stringBuilder.toString());
            return responseDTO;
        }

        dao.update(domainEntity);

        return new ResponseDTO(domainEntity);
    }

    @Override
    public List<ResponseDTO> list(DomainEntity domainEntity) {
        super.initialize();
        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);

        List<ResponseDTO> responseDTOList = new ArrayList<>();
        dao.list(domainEntity).forEach(d -> responseDTOList.add(new ResponseDTO(d)));

        return responseDTOList;
    }

    @Override
    public ResponseDTO get(DomainEntity domainEntity) {
        super.initialize();
        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);

        return new ResponseDTO(dao.get(domainEntity.getId()));
    }

    public ResponseDTO updatePassword(DomainEntity domainEntity) {
        super.initialize();
        stringBuilder.setLength(0);

        responseDTO = new ResponseDTO();

        String className = domainEntity.getClass().getName();
        IDAO dao = daos.get(className);
        Map<String, List<IStrategy>> entityMap = businessRule.get(className);
        List<IStrategy> bnsEntity = entityMap.get("UPDATE_PASSWORD");

        executeRules(domainEntity, bnsEntity);

        if(stringBuilder.length() > 0) {
            responseDTO.setHasError(true);
            responseDTO.setMessage(stringBuilder.toString());
            return responseDTO;
        }


        return new ResponseDTO(dao.update(domainEntity));
    }
}
