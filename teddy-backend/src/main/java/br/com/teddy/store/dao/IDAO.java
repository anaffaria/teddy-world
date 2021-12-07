package br.com.teddy.store.dao;

import br.com.teddy.store.domain.DomainEntity;

import java.util.List;

public interface IDAO {
    public DomainEntity create(DomainEntity domainEntity);
    public DomainEntity delete(Long id);
    public DomainEntity update(DomainEntity domainEntity);
    public List<DomainEntity> list(DomainEntity domainEntity);
    public DomainEntity get(Long id);
}
