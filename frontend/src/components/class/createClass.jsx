import { Box, Grid, MenuItem, Select, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { Button } from "react-day-picker"

function CreateClasses(){
    const [id,setId] = useState()
    const [className,setClassName] = useState()
    const [version, setVersion] = useState()
    const [classheadTeacher, setClassheadTeacher] = useState()
    const[teachers, setTeacher] = useState()

    useEffect(()=>{ 
        fetch("http://localhost:8080/teacher/",{
          method:"GET"
        })
        .then(resposne => resposne.json())
        .then(data => setTeacher(data))
    })

    return(
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid>
       <TextField
       required
       id ="outline-required"
       label="ID"
       onChange={(e)=>setId(e.target.value)}
       />
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
       onChange={(e)=>setId(e.target.value)}>
        {teachers && teachers.map((teacher) =>(
        <MenuItem>{teacher.lastname}</MenuItem>
       ))}
       </Select>
       <Grid item xs={2}>
            <Button>Add Teacher</Button>
       </Grid>
       </Grid>
        </Box>
    )
}
export default CreateClasses