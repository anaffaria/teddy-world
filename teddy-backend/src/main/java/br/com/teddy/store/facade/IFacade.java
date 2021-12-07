package br.com.teddy.store.facade;

import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.dto.AttrResponseDTO;

import java.util.List;

public interface IFacade {
    public AttrResponseDTO create(DomainEntity domainEntity);
    public AttrResponseDTO delete(DomainEntity domainEntity);
    public AttrResponseDTO update(DomainEntity domainEntity);
    public List<AttrResponseDTO> list(DomainEntity domainEntity);
    public AttrResponseDTO get(DomainEntity domainEntity);
}
