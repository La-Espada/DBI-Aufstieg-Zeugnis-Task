package at.spengergasse.studentzeugnis.controller.www;

import at.spengergasse.studentzeugnis.model.StudentZeugnis;
import at.spengergasse.studentzeugnis.model.Teacher;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;
import java.util.List;


@Builder
@Data
public class ClassRequest {
    @NotNull(message = "Version can not be null")
    private String version;
    @NotNull(message = "Classname can not be null")
    private String className;
    //@NotNull(message = "Class Teacher can not be null")
    private String classheadTeacher;
    //@NotNull(message = "Students can not be null")
    List<StudentZeugnis> students;
    @NotNull(message = "Time Stamp can not be null")
    private LocalDateTime timeStamp;
}
