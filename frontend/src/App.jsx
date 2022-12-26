import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Teacher from './components/teacher/Teacher';
import CreateTeacher from './components/teacher/createTeacher';
import Student from './components/student/Student';
import CreateStudent from './components/student/createStudent';
import Class from './components/class/Class';
import StartPage from './components/start/StartPage';
import CreateClasses from './components/class/createClass';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<StartPage/>} />
      <Route path="/teacher" element={<Teacher/>} />
      <Route path="/createTeacher" element={<CreateTeacher/>} />
      <Route path="/students" element={<Student/>}/>
      <Route path="/createStudents" element={<CreateStudent/>}/>
      <Route path="/classes" element={<Class/>}/>
      <Route path="/createClasses" element={<CreateClasses/>}/>
      </Routes>
      </Router>

  );
}

export default App;
