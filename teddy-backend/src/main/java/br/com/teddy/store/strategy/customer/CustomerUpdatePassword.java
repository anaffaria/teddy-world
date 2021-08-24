package br.com.teddy.store.strategy.customer;

import br.com.teddy.store.dao.customer.CustomerDAO;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.strategy.IStrategy;
import br.com.teddy.store.utils.validators.Password;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomerUpdatePassword implements IStrategy {
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomerDAO customerDAO;

    @Override
    public String applyBusinessRule(DomainEntity domainEntity) {
        if (domainEntity instanceof Customer) {
            Customer customer = (Customer) domainEntity;
            StringBuilder stringBuilder = new StringBuilder();
            Customer customerExisting = (Customer) customerDAO.get(domainEntity.getId());

            String encryptedPassword = customerExisting.getPassword();

            stringBuilder.append(Password.validatePassword(customer.getNewPassword(), customer.getPasswordConfirm()));

            if(passwordEncoder.matches(customer.getNewPassword(), encryptedPassword)) {
                stringBuilder.append("A nova senha não pode ser igual a anterior");
                return stringBuilder.toString();
            }

            if(!passwordEncoder.matches(customer.getPassword(), encryptedPassword)) {
                stringBuilder.append(" Senha atual incorreta");
                return stringBuilder.toString();
            }

            return stringBuilder.toString();
        }
        return null;
    }
}
