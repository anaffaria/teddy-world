package br.com.teddy.store.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

public abstract class AttrResponseDTO {
    public Long id;
    public LocalDateTime createdAt;
    public LocalDateTime deletedAt;
}
