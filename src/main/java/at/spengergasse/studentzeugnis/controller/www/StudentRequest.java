package at.spengergasse.studentzeugnis.controller.www;

import at.spengergasse.studentzeugnis.model.Gender;
import at.spengergasse.studentzeugnis.model.Subject;
import at.spengergasse.studentzeugnis.model.WP;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;

@Data
public class StudentRequest {
    @NotNull
    private String version;
    @NotNull
    private String id;
    @NotNull
    private String firstname;
    @NotNull
    private String lastname;
    @NotNull
    private Gender gender;
    @NotNull
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;
    @NotNull
    private double age;
    private String studentClass;
    List<WP> wpList;
    List<Subject> subjects;
    @NotNull
    private boolean passed;
}
