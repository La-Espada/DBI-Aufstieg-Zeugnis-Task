package at.spengergasse.studentzeugnis.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Setter
@Getter

@Data
@Document("student_zeugnis")
public class Student_zeugnis {
    private String version;
    @Id
    private int id;
    private boolean aufstieg;
    private String firstname;
    private String lastname;
    private Gender gender;
    private LocalDate brithDate;
    private double age;
    private WP WP;
    private Subject subject;
    private LocalDate timeStamp;


}
