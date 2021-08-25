package br.com.teddy.store.dao.creditcard;

import br.com.teddy.store.dao.IDAO;
import br.com.teddy.store.domain.Address;
import br.com.teddy.store.domain.CreditCard;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;

import br.com.teddy.store.repostiory.ICreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class CreditCardDAO implements IDAO {

    @Autowired
    ICreditCardRepository iCreditCardRepository;

    @Override
    public DomainEntity create(DomainEntity domainEntity) {
        CreditCard creditCard = (CreditCard) domainEntity;

         return iCreditCardRepository.save(creditCard);
    }

    @Override
    public DomainEntity delete(Long id) {
        CreditCard creditCard = (CreditCard) get(id);
        creditCard.setDeletedAt(LocalDateTime.now());

        return iCreditCardRepository.save(creditCard);
    }

    @Override
    public DomainEntity update(DomainEntity domainEntity) {
        return null;
    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        List<DomainEntity> domains = new ArrayList<>();

        iCreditCardRepository.findAll().forEach(e -> domains.add(e));

        return domains;
    }

    @Override
    public DomainEntity get(Long id) {

        CreditCard creditCard = null;
        try {
            creditCard = iCreditCardRepository.findById(id).get();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return creditCard;
    }
}
