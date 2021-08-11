package br.com.teddy.store.strategy.customer;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.strategy.IStrategy;
import br.com.teddy.store.utils.validators.Password;
import org.springframework.stereotype.Service;

@Service
public class CustomerUpdatePassword implements IStrategy {
    @Override
    public String applyBusinessRule(DomainEntity domainEntity) {
        if (domainEntity instanceof Customer) {
            Customer customer = (Customer) domainEntity;
            StringBuilder stringBuilder = new StringBuilder();

            stringBuilder.append(Password.validatePassword(customer.getPassword(), customer.getPasswordConfirm()));

            return stringBuilder.toString();
        }
        return null;
    }
}
