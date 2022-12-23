package at.spengergasse.studentzeugnis.repository;

import at.spengergasse.studentzeugnis.model.Class;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClassRepository extends MongoRepository<Class,String> {
}
