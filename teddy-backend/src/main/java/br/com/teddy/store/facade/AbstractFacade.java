package br.com.teddy.store.facade;

import br.com.teddy.store.dao.IDAO;
import br.com.teddy.store.dao.address.AddressDAO;
import br.com.teddy.store.dao.customer.CustomerDAO;
import br.com.teddy.store.domain.Address;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.strategy.IStrategy;
import br.com.teddy.store.strategy.UpdateFields;
import br.com.teddy.store.strategy.address.AddressConstraints;
import br.com.teddy.store.strategy.customer.CustomerConstraints;
import br.com.teddy.store.strategy.customer.CustomerUpdatePassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public abstract class AbstractFacade {
    protected Map<String, IDAO> daos = new HashMap<>();
    protected Map<String, Map<String, List<IStrategy>>> businessRule = new HashMap<>();

    @Autowired
    private CustomerDAO customerDAO;

    @Autowired
    private CustomerConstraints customerConstraints;

    @Autowired
    private CustomerUpdatePassword customerUpdatePassword;

    @Autowired
    private UpdateFields updateFields;

    @Autowired
    private AddressDAO addressDAO;

    @Autowired
    private AddressConstraints addressConstraints;

    public void initialize() {

        //----------------------- Hash Costumer --------------------------//

        daos.put(Customer.class.getName(), customerDAO);

        List<IStrategy> bnsRulesCustomer = new ArrayList<>();
        List<IStrategy> bnsRulesPasswordCustomer = new ArrayList<>();
        List<IStrategy> bnsRulesUpdateCustomer = new ArrayList<>();

        bnsRulesCustomer.add(customerConstraints);
        bnsRulesPasswordCustomer.add(customerUpdatePassword);
        bnsRulesUpdateCustomer.add(updateFields);

        Map<String,List<IStrategy>> mapKeyCustomer = new HashMap<>();

        mapKeyCustomer.put("CREATE", bnsRulesCustomer);
        mapKeyCustomer.put("UPDATE", bnsRulesUpdateCustomer);
        mapKeyCustomer.put("UPDATE_PASSWORD", bnsRulesPasswordCustomer);

        businessRule.put(Customer.class.getName(), mapKeyCustomer);

        //----------------------- Hash Address --------------------------//

        daos.put(Address.class.getName(), addressDAO);

        List<IStrategy> bnsRulesAddress = new ArrayList<>();
        List<IStrategy> bnsRulesUpdateAddress = new ArrayList<>();

        bnsRulesAddress.add(addressConstraints);
        bnsRulesUpdateAddress.add(addressConstraints);

        Map<String,List<IStrategy>> mapKeyAddress = new HashMap<>();

        mapKeyAddress.put("CREATE", bnsRulesAddress);
        mapKeyAddress.put("UPDATE", bnsRulesUpdateAddress);

        businessRule.put(Address.class.getName(), mapKeyAddress);

    }
}
