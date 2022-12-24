package at.spengergasse.studentzeugnis.repository;

import at.spengergasse.studentzeugnis.model.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface TeacherRepository extends MongoRepository<Teacher,String> {
    Optional<Teacher> findTeacherByFirstnameAndLastname(String firstname, String lastname);
    Optional<Teacher> findTeacherById(String Id);



}
