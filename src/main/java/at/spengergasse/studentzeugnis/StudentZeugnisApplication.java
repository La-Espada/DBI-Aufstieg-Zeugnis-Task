package at.spengergasse.studentzeugnis;

import at.spengergasse.studentzeugnis.model.Gender;
import at.spengergasse.studentzeugnis.model.StudentZeugnis;
import at.spengergasse.studentzeugnis.model.Subject;
import at.spengergasse.studentzeugnis.repository.StudentZeugnisRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.*;

@SpringBootApplication
public class StudentZeugnisApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(StudentZeugnisApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {

    }

    @Bean
    CommandLineRunner runner(StudentZeugnisRepository studentZeugnisRepository){
        return args -> {
            Subject german = new Subject("D","3","3");
            Subject math = new Subject("AM","3","3");
            Subject english = new Subject("E1","3","3");
            Subject geographyHistory = new Subject("GGP","3","3");
            Subject sports = new Subject("BESP","3","3");
            Subject science = new Subject("NW2","3","3");
            Subject tinf = new Subject("TINF","3","3");
            Subject programming = new Subject("POS1","3","3");
            Subject database = new Subject("DBI","3","3");

            //Subject[] subjects = {german,math,english,geographyHistory,sports,science,tinf,programming,database};

            List<Subject> subjects = new ArrayList<>();
            subjects.add(german);
            subjects.add(math);
            subjects.add(english);
            subjects.add(geographyHistory);
            subjects.add(sports);
            subjects.add(science);
            subjects.add(tinf);
            subjects.add(programming);
            subjects.add(database);



            StudentZeugnis student1 = new StudentZeugnis(
                    1,
                    "1.0.0",
                    true,
                    "Max",
                    "Mustermann",
                    Gender.MALE,
                    LocalDate.of(2002,3,20),
                    20.9,
                    null,
                    subjects,
                    LocalDate.now()

            );

            studentZeugnisRepository.save(student1);


        };
    }
}
