package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.CreditCard;
import org.springframework.data.repository.CrudRepository;

public interface ICreditCardRepository extends CrudRepository<CreditCard, Long> {
}
