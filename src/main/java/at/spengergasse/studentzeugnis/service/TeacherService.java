package at.spengergasse.studentzeugnis.service;

import at.spengergasse.studentzeugnis.model.Teacher;
import at.spengergasse.studentzeugnis.repository.TeacherRepository;
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
public class TeacherService {

    private final TeacherRepository teacherRepository;

    public Teacher save(Teacher teacher) {
        Teacher newTeacher = null;

            var teacherTemp = teacherRepository.findTeacherByFirstnameAndLastname(teacher.getFirstname(),teacher.getLastname());
            if(teacherTemp.isPresent()){
                log.error("Teacher {} " + teacher.getTeacherInfo() + " already exists!");
                return teacherTemp.get();
            }
            newTeacher = teacher;
            log.info("Teacher {} " + newTeacher.getTeacherInfo() + " created " + newTeacher.getTimeStamp());
            return teacherRepository.save(newTeacher);
    }

    public void deleteTeacher(String id){
        Teacher teacher = null;
        Optional<Teacher> teacherList = teacherRepository.findTeacherById(id);
     if(teacherList.isPresent()){
        teacher = teacherList.get();
        teacherRepository.delete(teacher);
        log.info("Teacher {} " + teacher.getTeacherInfo() + " has been deleted: " + LocalDateTime.now());
        }
     else{
        log.error("Teacher with the ID " + id +  " does not exist!");
     }
    }

    public void deleteTeacher(String firstname, String lastname){
        Teacher teacher = null;
        Optional<Teacher> teacherList = teacherRepository.findTeacherByFirstnameAndLastname(firstname,lastname);
        if(teacherList.isPresent()){
            teacher = teacherList.get();
            teacherRepository.delete(teacher);
            log.info("Teacher {} " + teacher.getTeacherInfo() + " has been deleted: " + LocalDateTime.now());
        }
        else{
            log.error("Teacher with the Firstname " + firstname + " " + "Lastname: " + lastname  +  " does not exist!");
        }
    }

    public List<Teacher> getTeachers(){
        var teachers = teacherRepository.findAll();
        log.info("Found teachers " + teachers.size());
        return teachers;
    }

    public Optional<Teacher> getTeacherById(String id){
        return teacherRepository.findTeacherById(id);
    }

}

