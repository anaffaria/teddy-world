package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Address;
import org.springframework.data.repository.CrudRepository;

public interface IAddressRepository extends CrudRepository<Address, Long> {
}
