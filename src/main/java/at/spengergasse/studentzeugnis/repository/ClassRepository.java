package at.spengergasse.studentzeugnis.repository;

import at.spengergasse.studentzeugnis.model.Class;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ClassRepository extends MongoRepository<Class,String> {
    Optional<Class> findById(String id);
    Optional<Class> findClassByClassName(String name);
}
