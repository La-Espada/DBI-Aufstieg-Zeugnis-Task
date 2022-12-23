package at.spengergasse.studentzeugnis.repository;

import at.spengergasse.studentzeugnis.model.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeacherRepository extends MongoRepository<Teacher,String> {
}
