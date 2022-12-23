package at.spengergasse.studentzeugnis.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter


@Data
@Document("teacher")
public class Teacher {
    private String version;
    @Id
    private String id;
    private String firstname;
    private String lastname;
    private LocalDateTime timeStamp;

    public Teacher(String version, String firstname, String lastname) {
        this.version = version;
        this.firstname = firstname;
        this.lastname = lastname;
}
