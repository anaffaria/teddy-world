package br.com.teddy.store.facade;

import br.com.teddy.store.dao.IDAO;
import br.com.teddy.store.dao.customer.CustomerDAO;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.strategy.IStrategy;
import br.com.teddy.store.strategy.UpdateFields;
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

    public void initialize() {
        daos.put(Customer.class.getName(), customerDAO);

        List<IStrategy> bnsRules = new ArrayList<>();
        List<IStrategy> bnsRulesPassword = new ArrayList<>();
        List<IStrategy> bnsRulesUpdate = new ArrayList<>();

        bnsRules.add(customerConstraints);
        bnsRulesPassword.add(customerUpdatePassword);
        bnsRulesUpdate.add(updateFields);

        Map<String,List<IStrategy>> mapKey = new HashMap<>();

        mapKey.put("CREATE", bnsRules);
        mapKey.put("UPDATE", bnsRulesUpdate);
        mapKey.put("UPDATE_PASSWORD", bnsRulesPassword);

        businessRule.put(Customer.class.getName(), mapKey);
    }
}
