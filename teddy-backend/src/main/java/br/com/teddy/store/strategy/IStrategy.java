package br.com.teddy.store.strategy;

import br.com.teddy.store.domain.DomainEntity;

public interface IStrategy {
    public String applyBusinessRule(DomainEntity domainEntity);

}
