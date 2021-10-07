package br.com.teddy.store.domain;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@Entity(name = "_teddy")
@Where(clause = "deleted_at is null")
public class Teddy extends DomainEntity{

    @NotNull
    @NotBlank(message = "A pelucia deve conter ao menos uma imagem")
    @Column(columnDefinition = "TEXT")
    private String image;

    @NotNull
    @NotBlank(message = "A pelucia deve conter um título")
    private String title;

    @NotNull
    @NotBlank(message = "A pelucia deve conter um subtitulo")
    private String subtitle;

    @NotNull
    private Double priceReal;

    @NotNull
    private Double priceFactory;

    @ManyToMany
    private List<Color> color;

    @ManyToMany
    private List<Category> category;

    @Enumerated(EnumType.ORDINAL)
    private Size size;


    private boolean active;

    private Integer amount;

    private Integer amountAvailable;

    private String reason;


    @Transient
    @Override
    public String validate(){
        StringBuilder stringBuilder = new StringBuilder();

        if(title.trim().length() < 2)
            stringBuilder.append("Título da pelucia inválido, ");

        if(image.trim().length() <= 0)
            stringBuilder.append("Insira uma url válida, ");

        if(priceReal < priceFactory){
            stringBuilder.append("O Preço Real da pelúcia precisa ser maior que o de Preço de Fabrica, ");
        }

        if(priceFactory.doubleValue() <= 10)
            stringBuilder.append("Preço da pelucia deve ser maior que 10, ");

//        if(!isActive() && reason.trim().length() < 5)
//            stringBuilder.append("Para desativar uma pelúcia é necessário uma justificativa(5 caractéres minimo)");

        return stringBuilder.toString();
    }

    public Teddy() {
        this.active = false;
    }

}
