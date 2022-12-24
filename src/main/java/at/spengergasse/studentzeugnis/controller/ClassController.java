package at.spengergasse.studentzeugnis.controller;

import at.spengergasse.studentzeugnis.controller.www.ClassRequest;
import at.spengergasse.studentzeugnis.controller.www.StudentRequest;
import at.spengergasse.studentzeugnis.model.Class;
import at.spengergasse.studentzeugnis.model.StudentZeugnis;
import at.spengergasse.studentzeugnis.model.Teacher;
import at.spengergasse.studentzeugnis.repository.ClassRepository;
import at.spengergasse.studentzeugnis.repository.TeacherRepository;
import at.spengergasse.studentzeugnis.service.ClassService;
import at.spengergasse.studentzeugnis.service.StudentService;
import at.spengergasse.studentzeugnis.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/class")
public class ClassController {

    @Autowired
    private ClassService classService;
    @Autowired
    private TeacherService teacherService;
    @Autowired
    private StudentService studentService;

    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private ClassRepository classRepository;

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody ClassRequest classRequest) {
        Teacher teacher = null;
        Optional<Teacher> teacherList = teacherService.getTeacherById(classRequest.getClassheadTeacher());
        if (teacherList.isPresent()) {
            teacher = teacherList.get();
        }
        Class newClass = Class.builder().version(classRequest.getVersion())
                .id(classRequest.getId())
                .className(classRequest.getClassName())
                .classheadTeacher(teacher)
                .studentZeugnis(classRequest.getStudents())
                .build();

        classService.save(newClass);
        System.out.println(newClass.getClassheadTeacher().toString());
        return ResponseEntity.ok().body(newClass);
    }
    @GetMapping("/")
    public ResponseEntity<?> getClasses(){
        List<Class> classList = classService.getClasses();
        List<ClassRequest> classRequests = new ArrayList<>();
        for (Class c: classList) {
            //System.out.println(c.getClassheadTeacher().toString());
           /* ClassRequest classRequest = ClassRequest.builder().version(c.getVersion())
                    .id(c.getId())
                    .className(c.getClassName())
                    .classheadTeacher(c.getClassheadTeacher().getId())
                    .students(c.getStudentZeugnis())
                    .timeStamp(c.getTimeStamp()).build();

            classRequests.add(classRequest);

            */
        }
        return ResponseEntity.ok().body(classList);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClasses(@PathVariable("id") String id){
        classService.deleteClass(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{id}/addStudent")
    public ResponseEntity<?> addStudentToClass(@PathVariable("id") String id, @RequestBody StudentRequest studentRequest){
        Class theClass = classService.getClassesByID(id);
        StudentZeugnis studentZeugnis = StudentZeugnis.builder()
                .version(studentRequest.getVersion())
                .id(studentRequest.getId())
                .firstname(studentRequest.getFirstname())
                .lastname(studentRequest.getLastname())
                .gender(studentRequest.getGender())
                .birthDate(studentRequest.getBirthDate())
                .age(studentRequest.getAge())
                .WP(studentRequest.getWpList())
                .subjects(studentRequest.getSubjects())
                .passed(studentRequest.isPassed())
                .build();

        theClass.getStudentZeugnis().add(studentZeugnis);
        studentService.save(studentZeugnis);
        classRepository.save(theClass);

        return ResponseEntity.ok().body(theClass);
    }

}



