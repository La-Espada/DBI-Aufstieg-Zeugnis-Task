import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, Navigate, BrowserRouter, } from 'react-router-dom';
import Teacher from './components/teacher/Teacher';
import CreateTeacher from './components/teacher/createTeacher';

function App() {
  return (
    <CreateTeacher></CreateTeacher>
    /*<BrowserRouter>
    <Routes>
      <Route exact path="/teacher" element={<Teacher/>}/>
      <Route exact path="/createTeacher" element={<CreateTeacher/>}/>
    </Routes>
    </BrowserRouter>
    */
  );
}

export default App;
