package br.com.teddy.store.facade;

import br.com.teddy.store.dao.IDAO;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.customer.ResponseDTO;
import br.com.teddy.store.strategy.IStrategy;
import org.springframework.stereotype.Service;

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
    public DomainEntity delete(DomainEntity domainEntity) {
        return null;
    }

    @Override
    public DomainEntity update(DomainEntity domainEntity) {
        return null;
    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        return null;
    }

    @Override
    public DomainEntity get(DomainEntity domainEntity) {
        return null;
    }
}
