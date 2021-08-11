package br.com.teddy.store.facade;

import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.customer.ResponseDTO;

import java.util.List;

public interface IFacade {
    public ResponseDTO create(DomainEntity domainEntity);
    public DomainEntity delete(DomainEntity domainEntity);
    public ResponseDTO update(DomainEntity domainEntity);
    public List<ResponseDTO> list(DomainEntity domainEntity);
    public ResponseDTO get(DomainEntity domainEntity);
}
