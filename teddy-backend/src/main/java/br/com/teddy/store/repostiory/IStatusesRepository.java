package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Status;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IStatusesRepository extends JpaRepository<Status, Long> {
    Status findByStatus(String name);
}
