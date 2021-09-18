package br.com.teddy.store.dto.login;

import br.com.teddy.store.model.JwtResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {
    private JwtResponse jwtResponse;
    private Long id;
}
