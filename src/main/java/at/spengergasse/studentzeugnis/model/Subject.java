package at.spengergasse.studentzeugnis.model;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Subject {
    @NotNull(message = "Name can not be null!")
    private String name;
    @NotNull(message = "WS can not be null!")
    private String WS;
    @NotNull(message = "SS can not be null!")
    private String SS;

}
