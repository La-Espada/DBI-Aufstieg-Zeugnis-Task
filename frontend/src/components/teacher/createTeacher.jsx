import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CreateTeacher(){
  const [id,setId] = useState();
  const [version, setVersion] = useState();
  const [firstname,setFirstname]= useState();
  const [lastname,setLastname] = useState();
  let navigate = useNavigate();



  async function create(){
    let teacher = {id,version,firstname,lastname}
    let result = await fetch("http://localhost:8080/teacher/add",{
      method:'Post',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
          },
          body:JSON.stringify(teacher)
        }
    );
    if(result.ok){
      //navigate("/teacher");
    }
  }
    return(
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            onChange={(e) => setId(e.target.value)}
            defaultValue="ID"
          />
          <TextField
            required
            id="outlined-required"
            label="Requird"
            onChange={(e) => setVersion(e.target.value)}
            defaultValue="Version"
          />
          <TextField
            required
            id="outlined-required"
            label="Requird"
            onChange={(e) => setFirstname(e.target.value)}
            defaultValue="Firstname"
            
          />
           <TextField
            required
            id="outlined-required"
            label="Requird"
            onChange={(e) => setLastname(e.target.value)}
            defaultValue="Lastname"
            
          />
          <Button variant='contained' onClick={create}>Add Teacher</Button>
        </div>
        </Box>
    )

}
export default CreateTeacher