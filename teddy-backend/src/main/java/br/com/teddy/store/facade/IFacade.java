package br.com.teddy.store.facade;

import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.AResponseDTO;
import br.com.teddy.store.dto.ResponseDTO;

import java.util.List;

public interface IFacade {
    public AResponseDTO create(DomainEntity domainEntity);
    public AResponseDTO delete(DomainEntity domainEntity);
    public AResponseDTO update(DomainEntity domainEntity);
    public List<ResponseDTO> list(DomainEntity domainEntity);
    public AResponseDTO get(DomainEntity domainEntity);
}
