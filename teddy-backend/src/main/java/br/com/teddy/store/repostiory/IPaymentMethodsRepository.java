package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.PaymentMethod;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPaymentMethodsRepository extends JpaRepository<PaymentMethod, Long> {
}
