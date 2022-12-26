package at.spengergasse.studentzeugnis.model;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@AllArgsConstructor
@Data
public class Subject {
    @NotNull(message = "Name can not be null!")
    private String name;
    @NotNull(message = "WS can not be null!")
    private String ws;
    @NotNull(message = "SS can not be null!")
    private String ss;

}
