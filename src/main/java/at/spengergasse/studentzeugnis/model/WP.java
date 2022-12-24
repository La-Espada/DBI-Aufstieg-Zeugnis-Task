package at.spengergasse.studentzeugnis.model;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@ToString
@Data
@NoArgsConstructor
public class WP {
    @NotNull(message = "Subject can not be null!")
    private String subject;
    @NotNull(message = "Grade can not be null!")
    private String grade;

}
