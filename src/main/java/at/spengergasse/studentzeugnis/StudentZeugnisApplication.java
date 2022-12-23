package at.spengergasse.studentzeugnis;

import at.spengergasse.studentzeugnis.model.*;
import at.spengergasse.studentzeugnis.model.Class;
import at.spengergasse.studentzeugnis.repository.ClassRepository;
import at.spengergasse.studentzeugnis.repository.StudentZeugnisRepository;
import at.spengergasse.studentzeugnis.repository.TeacherRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class StudentZeugnisApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(StudentZeugnisApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }



    @Bean
    CommandLineRunner runner(ClassRepository classRepository, StudentZeugnisRepository studentZeugnisRepository, TeacherRepository teacherRepository) {
        return args -> {
            /*classRepository.deleteAll();
            studentZeugnisRepository.deleteAll();
            teacherRepository.deleteAll();
            Teacher petschenig = new Teacher("1.0.0","Brigitte", "Petschenig");


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

            StudentZeugnis cemilAslan = new StudentZeugnis("1.0.0","Cemil","Aslan", Gender.MALE, LocalDate.of(2002,3,20),20,wpsAslan,subjectsAslan,true);

            List<StudentZeugnis> students = new ArrayList<>();
            students.add(cemilAslan);



            Class fiveBHIF = new Class("1.0.0","5BHIF",petschenig,students);


            teacherRepository.save(petschenig);
            studentZeugnisRepository.save(cemilAslan);
            classRepository.save(fiveBHIF);*/
        };
    }
}
