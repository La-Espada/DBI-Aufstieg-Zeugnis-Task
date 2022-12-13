package at.spengergasse.studentzeugnis.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter

@Data
@Document("class")
public class Class {
    private String version;
    private String id;
    private String className;
    private Teacher classheadTeacher;
    private kjabjckjsnaklsnklbsdjlovsdbnkl  
}
