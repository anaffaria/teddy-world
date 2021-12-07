package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICartsRepository extends JpaRepository<Cart, Long> {
}
