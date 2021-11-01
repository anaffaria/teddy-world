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

    List<Order> findAllByCreatedAtGreaterThanEqualAndCreatedAtLessThanEqual(LocalDateTime start, LocalDateTime end);
}

/*
// Select with teddy
SELECT te.title, CAST(o.created_at as DATE), count(o.id)
	FROM public._order o
		inner join _order_item_list oi on o.id = oi._order_id
		inner join _item i on i.id = oi.item_list_id
		inner join _teddy te ON te.id = i.teddy_id
	where o.created_at between SYMMETRIC '2021-09-26' and '2021-09-27 23:59:59'
	GROUP by te.title, CAST(o.created_at as DATE)
	order by CAST(o.created_at as DATE)
;

// Select with category
SELECT ct."name", CAST(o.created_at as DATE), count(o.id)
	FROM public._order o
		inner join _order_item_list oi on o.id = oi._order_id
		inner join _item i on i.id = oi.item_list_id
		inner join _teddy te ON te.id = i.teddy_id
		inner join _teddy_category tc ON tc._teddy_id = te.id
		inner join _category ct ON ct.id = tc.category_id
	where o.created_at between SYMMETRIC '2021-09-01' and '2021-09-30 23:59:59'
	GROUP by ct."name", CAST(o.created_at as DATE)
	order by CAST(o.created_at as DATE)
;
* */