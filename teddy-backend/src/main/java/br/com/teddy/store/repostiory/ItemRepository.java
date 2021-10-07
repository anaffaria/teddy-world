package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
