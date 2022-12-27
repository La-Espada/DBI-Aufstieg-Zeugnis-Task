import React,{useEffect, useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import { MenuItem, Select } from '@mui/material';

export default function StartPage() {
  const [students, setStudents]= useState();
  const [classe, setClass] = useState();
    let navigate = useNavigate();

    useEffect(()=>{ 
      fetch("http://localhost:8080/class/",{
        method:"GET"
      })
      .then(resposne => resposne.json())
      .then(data => setClass(data))
  },[])



    async function selectClass(id){
      let result = await fetch("http://localhost:8080/class/"+ id,{
        method:"GET"
      })
      if(result.ok){
        setStudents(result.studentZeugnis)
      }

    }

    async function deleteE(id){
      let result = await fetch("http://localhost:8080/student/"+id,{
      method:'Delete',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
          }
      });
      if(result.ok){
        window.location.reload(false);    

     
      }
    }
  return (
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() =>{ navigate("/students")}}>Schüler</Button>
          <Button color="inherit" onClick={() => navigate("/teacher")}>Lehrer</Button>
          <Button color="inherit" onClick={() => navigate("/classes")}>Klasse</Button>

        </Toolbar>
        <Box>
        {}  
        <Select
          value={classe}
          onChange={(e)=> selectClass(e.target.value)}>
            {classe && classe.map((newClass)=>(
              <MenuItem value={newClass.id}>{newClass.className}</MenuItem>
            ))}
          </Select>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Passed</TableCell>
                <TableCell align="center">Name,Gender,Age</TableCell>
                <TableCell align="center">REL</TableCell>
                <TableCell align="center">D</TableCell>
                <TableCell align="center">E1</TableCell>
                <TableCell align="center">GGP</TableCell>
                <TableCell align="center">BESP</TableCell>
                <TableCell align="center">AM</TableCell>
                <TableCell align="center">NW2</TableCell>
                <TableCell align="center">TINF</TableCell>
                <TableCell align="center">POS1</TableCell>
                <TableCell align="center">DBI</TableCell>
                <TableCell align="center"><Button 
                onClick={()=>navigate("/createStudents")} 
                variant ="contained">Create</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell align="center"> </TableCell>
                <TableCell align="center">     </TableCell>
                <TableCell align="center"><TableCell>WS</TableCell><TableCell>SS</TableCell></TableCell>
                <TableCell align="center"><TableCell>WS</TableCell><TableCell>SS</TableCell></TableCell>
                <TableCell align="center"><TableCell>WS</TableCell><TableCell>SS</TableCell></TableCell>
                <TableCell align="center"><TableCell>WS</TableCell><TableCell>SS</TableCell></TableCell>
                <TableCell align="center"><TableCell>WS</TableCell><TableCell>SS</TableCell></TableCell>
                <TableCell align="center"><TableCell>WS</TableCell><TableCell>SS</TableCell></TableCell>
                <TableCell align="center"><TableCell>WS</TableCell><TableCell>SS</TableCell></TableCell>
                <TableCell align="center"><TableCell>WS</TableCell><TableCell>SS</TableCell></TableCell>
                <TableCell align="center"><TableCell>WS</TableCell><TableCell>SS</TableCell></TableCell>
                <TableCell align="center"><TableCell>WS</TableCell><TableCell>SS</TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students && students.map((student) => (
                <TableRow
                  key={student.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="students">
                    {student.id}
                  </TableCell>
                  <TableCell align="right">{String(student.passed)}</TableCell>
                  <TableCell align="right">{student.firstname}, {student.lastname}, {student.gender} {student.age}</TableCell>
                    {student.subjects.map((subject)=>(
                     <TableCell align="center"><TableCell align="center">{subject.ws}</TableCell> <TableCell align="center">{subject.ss}</TableCell></TableCell>        
                    ))}
                    
                    
                  <TableCell align="right"><Button variant="contained" value={student.id} onClick={(e)=>deleteE(e.target.value)}>Delete</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
      </AppBar>

  );
}