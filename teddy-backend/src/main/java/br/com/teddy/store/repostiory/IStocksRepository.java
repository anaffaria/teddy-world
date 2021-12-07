package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IStocksRepository extends JpaRepository<Stock, Long> {
}
