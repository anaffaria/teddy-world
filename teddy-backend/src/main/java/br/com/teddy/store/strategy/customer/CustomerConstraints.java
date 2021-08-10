package br.com.teddy.store.strategy.customer;

import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.strategy.IStrategy;
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

            pattern = Pattern.compile("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$");
            matcher = pattern.matcher(customer.getPassword());

            if(!matcher.matches()) stringBuilder.append("A Senha deve conter numeros caracteres especiais uma letra maiúscula e 8 digitos,");
            if(!customer.getPassword().equals(customer.getPasswordConfirm())) stringBuilder.append("As senhas não conferem");

            return stringBuilder.toString();
        }
        return "";
    }
}
