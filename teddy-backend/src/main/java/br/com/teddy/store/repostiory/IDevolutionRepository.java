package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Devolution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface IDevolutionRepository extends JpaRepository<Devolution, Long> {
    @Query("SELECT d FROM _devolution d where d.order.customer.id = ?1")
    List<Devolution> findAllDevolutionByCustomerId(Long id);
}
