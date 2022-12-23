package at.spengergasse.studentzeugnis.persistence;

import at.spengergasse.studentzeugnis.model.Teacher;
import at.spengergasse.studentzeugnis.repository.TeacherRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class TeacherRepositoryTest {

    @Autowired
    private TeacherRepository teacherRepository;

    @Test
    void ensureSavingWorksProperly(){
        //given
        Teacher petschening = Teacher.builder().firstname("Brigitte").lastname("Petschenig").version("1.0.0").build();

        //When
        var saved = teacherRepository.save(petschening);
        Assertions.assertThat(saved).isSameAs(petschening);

    }
}
