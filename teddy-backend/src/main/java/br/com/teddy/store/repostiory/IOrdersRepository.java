package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Order;
import br.com.teddy.store.dto.order.OrderFilterDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public interface IOrdersRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByCreatedAtBetweenOrderByCreatedAt(Date dateInitial, Date dateFinal);

    List<Order> findAllByCreatedAtGreaterThanEqualAndCreatedAtLessThanEqualOrderByCreatedAtAsc(LocalDateTime start, LocalDateTime end);
}