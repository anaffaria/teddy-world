package br.com.teddy.store.service.serviceImpl;

import br.com.teddy.store.service.IFretenatorService;
import br.com.teddy.store.utils.correiostools.Fretenator;
import br.com.teddy.store.utils.correiostools.FretenatorResult;
import br.com.teddy.store.utils.correiostools.FretenatorResultItem;
import org.springframework.stereotype.Service;

@Service
public class FretenatorService implements IFretenatorService {

    @Override
    public Double calculateTax(String postalCode) throws Exception {
        Fretenator fretenator = new Fretenator();
        fretenator.codServico("41106");
        fretenator.codFormato(1);
        fretenator.altura(11d);
        fretenator.largura(12d);
        fretenator.comprimento(16d);
        fretenator.peso("0,450");
        fretenator.cepOrigem("01010-010");
        fretenator.cepDestino(postalCode);
        FretenatorResult result = fretenator.result();
        FretenatorResultItem servico = result.getServico(41106);

        if(servico.getErro()) {
            throw new Exception(servico.getMensagemDeErro());
        }

        return servico.getValor();
    }
}
