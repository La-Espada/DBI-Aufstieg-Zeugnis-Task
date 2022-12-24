package at.spengergasse.studentzeugnis.controller;


import at.spengergasse.studentzeugnis.controller.www.StudentRequest;
import at.spengergasse.studentzeugnis.model.StudentZeugnis;
import at.spengergasse.studentzeugnis.model.Subject;
import at.spengergasse.studentzeugnis.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:1000")
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody StudentZeugnis studentZeugnis){

        List<Subject> subjects = new ArrayList<>();

        for (Subject s:studentZeugnis.getSubjects()) {
            subjects.add(s);

            System.out.println(s.toString());
        }


       /* StudentZeugnis studentZeugnis2 = StudentZeugnis.builder()
                .version(studentZeugnis.getVersion())
                .age(studentZeugnis.getAge())
                .birthDate(studentZeugnis.getBirthDate())
                .WP(studentZeugnis.getWpList())
                .firstname(studentZeugnis.getFirstname())
                .gender(studentZeugnis.getGender())
                .id(studentZeugnis.getId())
                .lastname(studentZeugnis.getLastname())
                .passed(studentZeugnis.isPassed())
                .subjects(subjects)
                .build();

        */

        studentService.save(studentZeugnis);
        return ResponseEntity.ok().body(studentZeugnis);
    }

    @GetMapping("/")
    public ResponseEntity<?> getStudents(){
        return ResponseEntity.ok().body(studentService.getStudents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getStudent(@PathVariable("id")String id){
        return ResponseEntity.ok().body(studentService.getStudentsById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable("id") String id){
        studentService.deleteStudent(id);
        return ResponseEntity.ok().build();
    }

}
