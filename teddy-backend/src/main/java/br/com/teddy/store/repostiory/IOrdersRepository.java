package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface IOrdersRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByCreatedAtBetweenOrderByCreatedAt(Date dateInitial, Date dateFinal);
}
