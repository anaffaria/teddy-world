package br.com.teddy.store.facade;

import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.ResponseDTO;

import java.util.List;

public interface IFacade {
    public ResponseDTO create(DomainEntity domainEntity);
    public ResponseDTO delete(DomainEntity domainEntity);
    public ResponseDTO update(DomainEntity domainEntity);
    public List<ResponseDTO> list(DomainEntity domainEntity);
    public ResponseDTO get(DomainEntity domainEntity);
}
