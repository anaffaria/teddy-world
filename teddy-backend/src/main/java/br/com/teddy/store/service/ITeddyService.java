package br.com.teddy.store.service;

import br.com.teddy.store.domain.Teddy;

import java.util.List;

public interface ITeddyService extends IGenericService<Teddy>{
    List<Teddy> findAllByActiveTrue();
}
