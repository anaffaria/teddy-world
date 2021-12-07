package br.com.teddy.store.utils.validators;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Password {
    public static String validatePassword(String password, String passwordConfirm) {
        if(null == password || null == passwordConfirm) {
            return "Senhas não podem ser nulas!";
        }

        StringBuilder stringBuilder = new StringBuilder();

        Pattern pattern = Pattern.compile("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20}$");
        Matcher matcher = pattern.matcher(password);

        if(!matcher.matches()) stringBuilder.append("A Senha deve conter numeros caracteres especiais uma letra maiúscula e 8 digitos,");
        if(!password.equals(passwordConfirm)) stringBuilder.append("As senhas não conferem");

        return stringBuilder.toString();
    }
}
