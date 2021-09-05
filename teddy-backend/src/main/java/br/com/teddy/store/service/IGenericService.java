package br.com.teddy.store.service;

import br.com.teddy.store.dto.AttrResponseDTO;

import java.util.List;

public interface IGenericService <T>{
    public List<AttrResponseDTO> findAll();
    public AttrResponseDTO findById(Long id);
    public AttrResponseDTO saveAndFlush(T object);

}
