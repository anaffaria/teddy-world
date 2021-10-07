package br.com.teddy.store.repostiory;


import br.com.teddy.store.domain.Color;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IColorRepository extends JpaRepository<Color, Long> {
}
