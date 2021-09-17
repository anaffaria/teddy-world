package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IWalletsRepository extends JpaRepository<Wallet, Long> {
}
