package br.com.teddy.store.facade;

import br.com.teddy.store.domain.DomainEntity;

import java.util.List;

public interface IFacade {
    public DomainEntity create(DomainEntity domainEntity);
    public DomainEntity delete(DomainEntity domainEntity);
    public DomainEntity update(DomainEntity domainEntity);
    public List<DomainEntity> list(DomainEntity domainEntity);
    public DomainEntity get(DomainEntity domainEntity);
}
