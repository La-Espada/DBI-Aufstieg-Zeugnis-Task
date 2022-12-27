import React,{useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';


function Student(){
    const [students, setStudents]= useState();
    let navigate = useNavigate();
    let subjects;
    useEffect(()=>{
        fetch("http://localhost:8080/student/",{
        method:"GET"
    })
    .then(response => response.json())
    .then(data => setStudents(data))
    },[])

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
      <Box>
               <h1>Students:</h1>
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
      );
}
export default Student