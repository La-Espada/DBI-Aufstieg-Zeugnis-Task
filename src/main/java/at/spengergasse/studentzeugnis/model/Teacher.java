package at.spengergasse.studentzeugnis.model;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;

@Getter
@Setter



@Data
@Document("teacher")
public class Teacher {
    @NotNull(message = "Version can not be null")
    private String version;
    @NotNull(message = "ID can not be null")
    @Id
    private String id;
    @NotNull(message = "Firstname can not be null")
    private String firstname;
    @NotNull(message = "Lastname can not be null")
    private String lastname;
    @NotNull(message = "Time Stamp can not be null")
    private LocalDateTime timeStamp;

    @Builder
    public Teacher(String version, String firstname, String lastname) {
        this.version = version;
        this.firstname = firstname;
        this.lastname = lastname;
        this.timeStamp = LocalDateTime.now();
    }


    public String getTeacherInfo() {
        return "Teacher{" +
                "version='" + version + '\'' +
                ", id='" + id + '\'' +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", timeStamp=" + timeStamp +
                '}';
    }
}
