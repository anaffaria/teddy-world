package br.com.teddy.store.service;

import br.com.teddy.store.domain.Devolution;

public interface IDevolutionService extends  IGenericService<Devolution>{
    Devolution sendDevolutionRequest(Devolution devolution);
    Devolution updateDevolutionRequest(Devolution devolution, Double valueWallet);
}
