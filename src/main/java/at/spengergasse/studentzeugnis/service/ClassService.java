package at.spengergasse.studentzeugnis.service;

import at.spengergasse.studentzeugnis.model.Class;
import at.spengergasse.studentzeugnis.model.Teacher;
import at.spengergasse.studentzeugnis.repository.ClassRepository;
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
public class ClassService {

    private final ClassRepository classRepository;
    private final TeacherRepository teacherRepository;

    public Class save(Class classAdd){
        Class newClass = null;

        var classTemp = classRepository.findClassByClassName(classAdd.getClassName());
        if(classTemp.isPresent()){
            log.error("Class {} " + classAdd.getClassInfo() + " already exists!");
            return classTemp.get();
        }
        newClass = classAdd;
        log.info("Class {} " + newClass.getClassInfo() + " created: " + newClass.getTimeStamp());
        return classRepository.save(newClass);
    }

    public void deleteClass(String id){
        Class classTemp = null;
        Teacher teacher = null;
        Optional<Class> classList = classRepository.findById(id);
        if(classList.isPresent() ){
            classTemp = classList.get();
            Optional<Teacher> teacher1 = teacherRepository.findTeacherById(classTemp.getClassheadTeacher().getId());
            if(teacher1.isPresent()) {
                teacher = teacher1.get();
                classRepository.delete(classTemp);
                log.info("Class {} " + classTemp.getClassInfo() + " deleted: " + LocalDateTime.now());
            }

        }
        else {
            log.error("Class with the ID " + id + " does not exist!");
        }
    }

    public void deleteClassName(String name){
        Class classTemp = null;
        Optional<Class> classList = classRepository.findClassByClassName(name);
        if(classList.isPresent()){
            classTemp = classList.get();
            classRepository.delete(classTemp);
            log.info("Class {} " + classTemp.getClassInfo() + " deleted: " + LocalDateTime.now());
        }
        else {
            log.error("Class with the name " + name + " does not exist!");
        }
    }

    public List<Class> getClasses(){
        var classes = classRepository.findAll();
        log.info("Found classes " + classes.size());
        return classes;
    }
    public Optional<Class> getClassesByName(String name){
        return classRepository.findClassByClassName(name);
    }

    public Class getClassesByID(String id){
        Class theClass = null;
        Optional<Class> classList = classRepository.findById(id);
        if(classList.isPresent()){
            theClass = classList.get();
            log.info("Found class: " + theClass.getClassInfo());
            return theClass;
        }
        log.error("Class: " + id +  " was not found!");
        return classList.get();
    }



}
