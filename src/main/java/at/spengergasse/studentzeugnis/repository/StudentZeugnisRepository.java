package at.spengergasse.studentzeugnis.repository;

import at.spengergasse.studentzeugnis.model.StudentZeugnis;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface StudentZeugnisRepository extends MongoRepository<StudentZeugnis,String>{

    Optional<StudentZeugnis> findStudentZeugnisByFirstnameAndLastname(String firstname, String lastname);
    Optional<StudentZeugnis> findStudentZeugnisById(String id);

}
