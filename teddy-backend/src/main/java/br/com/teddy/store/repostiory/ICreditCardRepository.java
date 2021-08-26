package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.CreditCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICreditCardRepository extends JpaRepository<CreditCard, Long> {
}
