package br.com.teddy.store.service;

import br.com.teddy.store.domain.Devolution;
import br.com.teddy.store.dto.AttrResponseDTO;

import java.util.List;

public interface IDevolutionService extends  IGenericService<Devolution>{
    AttrResponseDTO sendDevolutionRequest(Devolution devolution) throws Exception;
    AttrResponseDTO updateDevolutionRequest(Devolution devolution, Double valueWallet);
    List<AttrResponseDTO> findAllDevolutionByCustomerId(Long id);
}
