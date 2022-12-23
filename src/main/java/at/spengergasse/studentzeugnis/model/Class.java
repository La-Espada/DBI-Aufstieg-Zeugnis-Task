package at.spengergasse.studentzeugnis.model;

import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter


@Data
@Document("class")
public class Class {
    @NotNull(message = "Version can not be null")
    private String version;
    @Id
    @NotNull(message = "ID can not be null")
    private String id;
    @NotNull(message = "Classname can not be null")
    private String className;
    @DBRef
   //@NotNull(message = "Class Teacher can not be null")
    private Teacher classTeacher;
    @DBRef
    //@NotNull(message = "Students can not be null")
    List<StudentZeugnis> students;
    @NotNull(message = "Time Stamp can not be null")
    private LocalDateTime timeStamp;

    @Builder
    public Class(String id,String version, String className, Teacher classheadTeacher, List<StudentZeugnis> studentZeugnis) {
        this.id = id;
        this.version = version;
        this.className = className;
        this.classTeacher = classheadTeacher;
        this.students = studentZeugnis;
        this.timeStamp = LocalDateTime.now();
    }
}
