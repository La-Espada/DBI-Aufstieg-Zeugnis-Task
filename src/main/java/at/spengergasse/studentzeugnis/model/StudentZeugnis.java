package at.spengergasse.studentzeugnis.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.List;

@Setter
@Getter

@Data
@Document("students_zeugnis")
public class StudentZeugnis {
    @Id
    private int id;
    private String version;
    private boolean passed;
    private String firstname;
    private String lastname;
    private Gender gender;
    private LocalDate brithDate;
    private double age;
    private WP WP;
    private List<Subject> subject;
    private LocalDate timeStamp;

    public StudentZeugnis(int id,String version, boolean passed, String firstname, String lastname, Gender gender, LocalDate brithDate, double age, WP WP, List<Subject> subject, LocalDate timeStamp) {
        this.id = id;
        this.version = version;
        this.passed = passed;
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.brithDate = brithDate;
        this.age = age;
        this.WP = WP;
        this.subject = subject;
        this.timeStamp = timeStamp;
    }


}
