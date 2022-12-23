package at.spengergasse.studentzeugnis.model;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public class WP {
    @NotNull(message = "Subject can not be null!")
    private String subject;
    @NotNull(message = "Grade can not be null!")
    private String grade;

}
