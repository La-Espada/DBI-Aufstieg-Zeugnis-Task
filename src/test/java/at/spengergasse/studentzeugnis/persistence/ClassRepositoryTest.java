package at.spengergasse.studentzeugnis.persistence;

import at.spengergasse.studentzeugnis.model.*;
import at.spengergasse.studentzeugnis.model.Class;
import at.spengergasse.studentzeugnis.repository.ClassRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@DataJpaTest
public class ClassRepositoryTest {

    @Autowired
    private ClassRepository classRepository;

    @Test
    void ensureSavingWorksProperly(){
        //given
        Subject germanCemil = new Subject("D","3","3");
        Subject mathCemil = new Subject("AM","2","2");
        Subject englishCemil = new Subject("E","3","3");
        Subject posCemil = new Subject("POS","3","3");
        Subject dbiCemil = new Subject("DBI","3","3");
        Subject nvsCemil = new Subject("NVS","3","3");
        Subject preCemil = new Subject("PRE","3","3");
        Subject relCemil = new Subject("REL","3","3");
        Subject sportCemil = new Subject("Sport","3","3");


        List<Subject> subjectsAslan = new ArrayList<>();
        subjectsAslan.add(germanCemil);
        subjectsAslan.add(mathCemil);
        subjectsAslan.add(englishCemil);
        subjectsAslan.add(posCemil);
        subjectsAslan.add(dbiCemil);
        subjectsAslan.add(nvsCemil);
        subjectsAslan.add(preCemil);
        subjectsAslan.add(relCemil);
        subjectsAslan.add(sportCemil);

        List<WP> wpsAslan = new ArrayList<>();

        StudentZeugnis cemil = StudentZeugnis.builder().version("1.0.0").firstname("Cemil").lastname("Aslan").age(20)
                .birthDate(LocalDate.of(2002,3,20)).gender(Gender.MALE)
                .passed(true).WP(wpsAslan).subjects(subjectsAslan).build();

        List<StudentZeugnis> students = new ArrayList<>();

        students.add(cemil);

        Teacher petschening = Teacher.builder().firstname("Brigitte").lastname("Petschenig").version("1.0.0").build();


        Class fiveBHIF = Class.builder().version("1.0.0").className("5BHIF").classheadTeacher(petschening).studentZeugnis(students).build();

        var saved = classRepository.save(fiveBHIF);
        Assertions.assertThat(saved).isSameAs(fiveBHIF);

    }


}
