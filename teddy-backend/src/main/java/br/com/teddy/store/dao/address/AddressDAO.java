package br.com.teddy.store.dao.address;

import br.com.teddy.store.dao.IDAO;
import br.com.teddy.store.domain.Address;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.domain.DomainEntity;
import br.com.teddy.store.repostiory.IAddressRepository;
import br.com.teddy.store.utils.FillNullProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class AddressDAO implements IDAO {

    @Autowired
    IAddressRepository addressRepository;

    @Override
    public DomainEntity create(DomainEntity domainEntity) {
        Address address = (Address) domainEntity;

        return addressRepository.save(address);
    }

    @Override
    public DomainEntity delete(Long id) {
        Address address = (Address) get(id);
                address.setDeletedAt(LocalDateTime.now());

        addressRepository.save(address);

        return address;
    }

    @Override
    public DomainEntity update(DomainEntity domainEntity) {
        Address addressNew = (Address) domainEntity;
        Address addressExisting = (Address) get(domainEntity.getId());

        LocalDateTime createdAt = addressExisting.getCreatedAt();

        FillNullProperty.copyNonNullProperties(addressNew, addressExisting);

        addressExisting.setCreatedAt(createdAt);
        addressExisting.setUpdatedAt(LocalDateTime.now());

        return addressRepository.save(addressExisting);
    }

    @Override
    public List<DomainEntity> list(DomainEntity domainEntity) {
        List<DomainEntity> domains = new ArrayList<>();

        addressRepository.findAll().forEach(e -> domains.add(e));

        return domains;
    }

    @Override
    public DomainEntity get(Long id) {
        Address address = null;
        try {
            address = addressRepository.findById(id).get();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return address;
    }
}
