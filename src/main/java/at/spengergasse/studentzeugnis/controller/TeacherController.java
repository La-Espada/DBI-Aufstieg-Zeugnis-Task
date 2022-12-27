package at.spengergasse.studentzeugnis.controller;

import at.spengergasse.studentzeugnis.model.Teacher;
import at.spengergasse.studentzeugnis.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:1000")
@RequestMapping("/teacher")
public class TeacherController
{
    @Autowired
    private TeacherService teacherService;

    @PostMapping("/add")
    public String add(@RequestBody Teacher teacher){
        teacherService.save(teacher);
        return "Teacher is added";
    }


    @GetMapping("/")
    public ResponseEntity<List<Teacher>> getTeachers(){
        return ResponseEntity.ok().body(teacherService.getTeachers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTeacher(@PathVariable("id") String id){
        return ResponseEntity.ok().body(teacherService.getTeacherById(id));
    }



    @DeleteMapping("/{id}")
    public HttpEntity<Void> deleteTeacher(@PathVariable("id") String id){
        teacherService.deleteTeacher(id);
        return ResponseEntity.ok().build();
    }






}
