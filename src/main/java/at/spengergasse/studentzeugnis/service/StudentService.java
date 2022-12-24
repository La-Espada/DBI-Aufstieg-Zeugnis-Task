package at.spengergasse.studentzeugnis.service;

import at.spengergasse.studentzeugnis.model.Class;
import at.spengergasse.studentzeugnis.model.StudentZeugnis;
import at.spengergasse.studentzeugnis.model.Teacher;
import at.spengergasse.studentzeugnis.repository.StudentZeugnisRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class StudentService {

    private final StudentZeugnisRepository studentZeugnisRepository;


    public StudentZeugnis save(StudentZeugnis studentZeugnis){
        StudentZeugnis newStudent = null;


        var studentTemp = studentZeugnisRepository.findStudentZeugnisByFirstnameAndLastname(studentZeugnis.getFirstname(),studentZeugnis.getLastname());
        if(studentTemp.isPresent()){
            log.error("Student {} " + studentZeugnis.getStudentInfo() + " already exists!");
            return studentTemp.get();
        }
        newStudent = studentZeugnis;
        log.info("Student {} " +  newStudent.getStudentInfo() + " created: " + newStudent.getTimeStamp());
        return studentZeugnisRepository.save(newStudent);
    }

    public StudentZeugnis saveWithClass(StudentZeugnis studentZeugnis, Class newClass){
        StudentZeugnis newStudent = null;

        var studentTemp = studentZeugnisRepository.findStudentZeugnisByFirstnameAndLastname(studentZeugnis.getFirstname(),studentZeugnis.getLastname());
        if(studentTemp.isPresent()){
            log.error("Student {} " + studentZeugnis.getStudentInfo() + " already exists!");
            return studentTemp.get();
        }
        newStudent = studentZeugnis;
        newStudent.setStudentClass(newClass);
        log.info("Student {} " +  newStudent.getStudentInfo() + " created: " + newStudent.getTimeStamp());
        return studentZeugnisRepository.save(newStudent);
    }
    public void deleteStudent(String id){
        StudentZeugnis newStudent = null;
        Optional<StudentZeugnis> studentList = studentZeugnisRepository.findStudentZeugnisById(id);
        if(studentList.isPresent()){
            newStudent = studentList.get();
            studentZeugnisRepository.delete(newStudent);
            log.info("Student {} " + newStudent.getStudentInfo() + " has been deleted: " + LocalDateTime.now());
        }
        else {
            log.error("Student with the ID " + id +  " does not exist!");
        }
    }

    public void deleteStudentByFirstLastname(String firstname,String lastname){
        StudentZeugnis newStudent = null;
        Optional<StudentZeugnis> studentList = studentZeugnisRepository.findStudentZeugnisByFirstnameAndLastname(firstname,lastname);
        if(studentList.isPresent()){
            newStudent = studentList.get();
            studentZeugnisRepository.delete(newStudent);
            log.info("Student {} " + newStudent.getStudentInfo() + " has been deleted: " + LocalDateTime.now());
        }
        else {
            log.error("Student with the Firstname " + firstname + " " + "Lastname: " + lastname  +  " does not exist!");
        }
    }

    public void deleteStudents(){
        studentZeugnisRepository.deleteAll();
    }

    public List<StudentZeugnis> getStudents(){
        var students = studentZeugnisRepository.findAll();
        log.info("Found students " + students.size());
        return students;
    }

    public Optional<StudentZeugnis> getStudentsById(String id){
        return studentZeugnisRepository.findStudentZeugnisById(id);
    }
}
