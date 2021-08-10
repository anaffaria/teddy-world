package br.com.teddy.store.facade;

import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.customer.ResponseDTO;

import java.util.List;

public interface IFacade {
    public ResponseDTO create(DomainEntity domainEntity);
    public DomainEntity delete(DomainEntity domainEntity);
    public DomainEntity update(DomainEntity domainEntity);
    public List<DomainEntity> list(DomainEntity domainEntity);
    public DomainEntity get(DomainEntity domainEntity);
}
