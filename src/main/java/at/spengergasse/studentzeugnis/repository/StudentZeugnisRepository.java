package at.spengergasse.studentzeugnis.repository;

import at.spengergasse.studentzeugnis.model.StudentZeugnis;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentZeugnisRepository extends MongoRepository<StudentZeugnis,String>{
}
