package br.com.teddy.store.model;

import br.com.teddy.store.domain.Customer;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class UserAuth implements UserDetails {
    private String userName;
    private String password;
    private boolean active;
    private List<GrantedAuthority> authorities;

    public UserAuth(Customer customer) {
        this.userName = customer.getEmail();
        this.password = customer.getPassword();
        this.active = true;
        if(null != customer.getDeletedAt()) {
            this.active = false;
        }

        this.authorities = Arrays.stream(customer.getRoles().split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }
}
