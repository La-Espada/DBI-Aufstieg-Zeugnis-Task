package at.spengergasse.studentzeugnis.model;

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
    private String version;
    @Id
    private String id;
    private String className;
    @DBRef
    private Teacher classheadTeacher;
    @DBRef
    List<StudentZeugnis> studentZeugnis;
    private LocalDateTime timeStamp;

    @Builder
    public Class(String version, String className, Teacher classheadTeacher, List<StudentZeugnis> studentZeugnis) {
        this.version = version;
        this.className = className;
        this.classheadTeacher = classheadTeacher;
        this.studentZeugnis = studentZeugnis;
        this.timeStamp = LocalDateTime.now();
    }

    @Builder
    public Class(String id,String version, String className, Teacher classheadTeacher, List<StudentZeugnis> studentZeugnis) {
        this.id = id;
        this.version = version;
        this.className = className;
        this.classheadTeacher = classheadTeacher;
        this.studentZeugnis = studentZeugnis;
        this.timeStamp = LocalDateTime.now();
    }
}
