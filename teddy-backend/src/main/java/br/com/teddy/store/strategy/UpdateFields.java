package br.com.teddy.store.strategy;

import br.com.teddy.store.domain.DomainEntity;
import org.springframework.stereotype.Service;

@Service
public class UpdateFields implements IStrategy {

    @Override
    public String applyBusinessRule(DomainEntity domainEntity) {
        if (null == domainEntity.getId()) {
            return "A entidade não pode ter o id nulo!";
        }
        return "";
    }
}
