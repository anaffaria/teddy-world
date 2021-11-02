package br.com.teddy.store.controller;

import br.com.teddy.store.config.JwtTokenUtil;
import br.com.teddy.store.domain.Customer;
import br.com.teddy.store.dto.login.LoginDTO;
import br.com.teddy.store.model.JwtRequest;
import br.com.teddy.store.model.JwtResponse;
import br.com.teddy.store.service.ICustomerService;
import br.com.teddy.store.service.serviceImpl.JwtUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private ICustomerService customerService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);

        Customer customer = getCustomerByUsername(authenticationRequest.getUsername());

        return ResponseEntity.ok(new LoginDTO(new JwtResponse(token), customer.getId(), customer.getRoles().contains("ADMIN")));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        } catch (Exception e) {
            System.err.println("Cause: "+e.getCause());
            System.err.println("Message: "+e.getMessage());
            System.err.println("Stack: "+e.getStackTrace());
        }
    }

    private Customer getCustomerByUsername(String username) {
        return customerService.findByEmail(username).get();
    }
}
