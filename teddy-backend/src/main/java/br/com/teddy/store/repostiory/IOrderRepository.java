package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderRepository extends JpaRepository<Order, Long> {

}
