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


function Class() {
    const [classes, setClasses] = useState([])
    let navigate = useNavigate()


    useEffect(()=>{ 
        fetch("http://localhost:8080/class/",{
          method:"GET"
        })
        .then(resposne => resposne.json())
        .then(data => setClasses(data))
    },[])

    async function deleteE(id){
      let result = await fetch("http://localhost:8080/class/"+id,{
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Version</TableCell>
            <TableCell align="right">class name</TableCell>
            <TableCell align="right">classhead Techer</TableCell>
            <TableCell align="right"><Button 
            onClick={()=>navigate("/createClasses")} 
            variant ="contained">Create</Button></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {classes && classes.map((newClass) => (
            <TableRow
              key={newClass.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="classes">
                {newClass.id}
              </TableCell>
              <TableCell align="right">{newClass.version}</TableCell>
              <TableCell align="right">{newClass.className}</TableCell>
              <TableCell align="right">{newClass.classheadTeacher.lastname}</TableCell>
              <TableCell align="right"><Button variant ="contained" onClick={(e)=> deleteE(newClass.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Class