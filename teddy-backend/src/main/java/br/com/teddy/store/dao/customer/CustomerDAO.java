package br.com.teddy.store.dao.customer;

import br.com.teddy.store.dao.IDAO;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.repostiory.ICustomerRepository;
import br.com.teddy.store.utils.FillNullProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerDAO implements IDAO {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    ICustomerRepository customerRepository;

    @Override
    public DomainEntity create(DomainEntity domainEntity) {
        Customer customer = (Customer) domainEntity;
        customer.setPassword(passwordEncoder.encode(customer.getPassword()));

        return customerRepository.save(customer);
    }

    @Override
    public DomainEntity delete(Long id) {
        Customer customer = (Customer) get(id);
                 customer.setDeletedAt(LocalDateTime.now());

        customerRepository.save(customer);

        return customer;
    }

    @Override
    public DomainEntity update(DomainEntity domainEntity) {
        // https://stackoverflow.com/questions/27818334/jpa-update-only-specific-fields
        Customer customerNew = (Customer) domainEntity;
        Customer customerExisting = (Customer) get(domainEntity.getId());
        String cpf = customerExisting.getCpf();
        LocalDateTime createdAt = customerExisting.getCreatedAt();
        String encryptedPassword = customerExisting.getPassword();

        FillNullProperty.copyNonNullProperties(customerNew, customerExisting);

        customerExisting.setCpf(cpf);
        customerExisting.setCreatedAt(createdAt);
        customerExisting.setPassword(encryptedPassword);
        customerExisting.setUpdatedAt(LocalDateTime.now());

        if(null != customerNew.getPassword() && !passwordEncoder.matches(customerNew.getPassword(), encryptedPassword)) {
            customerExisting.setPassword(passwordEncoder.encode(customerNew.getPassword()));
        }

        return customerRepository.save(customerExisting);
    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        List<DomainEntity> domains = new ArrayList<>();

        customerRepository.findAll().forEach(e -> domains.add(e));

        return domains;
    }

    @Override
    public DomainEntity get(Long id) {
        Customer customer = null;
        try {
            customer = customerRepository.findById(id).get();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return customer;
    }
}
