package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Teddy;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ITeddyRepository extends JpaRepository<Teddy, Long> {
    List<Teddy> findAllByActiveTrue(Sort sort);
}
