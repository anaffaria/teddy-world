package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Customer;
import org.springframework.data.repository.CrudRepository;

public interface ICustomerRepository extends CrudRepository<Customer, Long> {
}
