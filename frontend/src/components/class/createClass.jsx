import { Box, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';


function CreateClasses(){
    const [className,setClassName] = useState()
    const [version, setVersion] = useState()
    const [classheadTeacher, setClassheadTeacher] = useState()
    const[teachers, setTeacher] = useState()

    let navigate = useNavigate();

    useEffect(()=>{ 
      fetch("http://localhost:8080/teacher/",{
        method:"GET"
      })
      .then(resposne => resposne.json())
      .then(data => setTeacher(data))
  },[])

  async function create(){
    let classe = {version,className,classheadTeacher}
    let result = await fetch("http://localhost:8080/class/add",{
      method:'Post',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
          },
          body:JSON.stringify(classe)
        }
    );
    if(result.ok){
      navigate("/classes");
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
               <h1>Create Class:</h1>
      <Grid>
       <TextField
       required
       id ="outline-required"
       label="Version"
       onChange={(e)=>setVersion(e.target.value)}
       />
       <TextField
       required
       id ="outline-required"
       label="Classname"
       onChange={(e)=>setClassName(e.target.value)}
       />

       <Select
       required
       id ="outline-required"
       label="classheadTeacher"
       value={classheadTeacher}
       onChange={(e)=>setClassheadTeacher(e.target.value)}>
        {teachers && teachers.map((teacher) =>(
        <MenuItem value={teacher.id} >{teacher.lastname}</MenuItem>
       ))}
       </Select>
       <Grid item xs={2}>
            <Button variant="contained" onClick={create}>Add Class</Button>
       </Grid>
       </Grid>
        </Box>
    )
}
export default CreateClasses