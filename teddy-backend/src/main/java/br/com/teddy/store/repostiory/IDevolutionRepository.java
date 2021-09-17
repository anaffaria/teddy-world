package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Devolution;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IDevolutionRepository extends JpaRepository<Devolution, Long> {
}
