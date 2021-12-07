package br.com.teddy.store.repostiory;

import br.com.teddy.store.domain.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ICustomerRepository extends JpaRepository<Customer, Long> {
    public Optional<Customer> findCustomerByEmail(String email);
}
