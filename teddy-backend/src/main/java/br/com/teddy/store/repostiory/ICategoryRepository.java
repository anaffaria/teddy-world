package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Long> {
}
