package at.spengergasse.studentzeugnis.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


@Setter
@Getter


@Data
@Document("students_zeugnis")
public class StudentZeugnis {
    private String version;
    @Id
    private String id;
    private String firstname;
    private String lastname;
    private Gender gender;
    private LocalDate brithDate;
    private double age;
    private List<WP> WP;
    List <Subject> subjects;
    private boolean passed;
    private LocalDateTime timeStamp;

    public StudentZeugnis(String version, String firstname, String lastname, Gender gender, LocalDate brithDate, double age, List<WP> WP, List<Subject> subjects, boolean passed) {
        this.version = version;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.brithDate = brithDate;
        this.age = age;
        this.WP = WP;
        this.subjects = subjects;
        this.passed = passed;
        this.timeStamp = LocalDateTime.now();

    }
}
