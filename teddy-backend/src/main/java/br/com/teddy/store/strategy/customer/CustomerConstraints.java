package br.com.teddy.store.strategy.customer;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.strategy.IStrategy;
import br.com.teddy.store.utils.validators.Password;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class CustomerConstraints implements IStrategy {
    @Override
    public String applyBusinessRule(DomainEntity domainEntity) {
        if (domainEntity instanceof Customer) {
            Customer customer = (Customer) domainEntity;
            StringBuilder stringBuilder = new StringBuilder();

            Pattern pattern = Pattern.compile("/(^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$)|(^\\d{3}\\d{3}\\d{3}\\d{2}$)|(^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2}$)|(^\\d{2}\\d{3}\\d{3}\\d{4}\\d{2}$)/");
            Matcher matcher = pattern.matcher(customer.getCpf());

            if (!matcher.matches()) stringBuilder.append("CPF não é válido,");

            stringBuilder.append(Password.validatePassword(customer.getPassword(), customer.getPasswordConfirm()));

            return stringBuilder.toString();
        }
        return "";
    }
}
