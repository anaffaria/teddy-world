package br.com.teddy.store.facade;

import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.strategy.IStrategy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Facade extends AbstractFacade implements IFacade{

    private StringBuilder stringBuilder;

    private void executarRegras(DomainEntity domainEntity, List<IStrategy> bnsRules) {
        for (IStrategy bnsRule : bnsRules) {
            String msg = bnsRule.applyBusinessRule(domainEntity);
            if (msg != null) {
                stringBuilder.append(msg);
            }
        }
    }

    @Override
    public DomainEntity create(DomainEntity domainEntity) {

        return null;
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
