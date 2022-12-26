import { Box, MenuItem, Select, TextField } from "@mui/material"
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
        <div>
          <TextField
            required
            id="outlined-required"
            label="ID"
            onChange={(e) => setId(e.target.value)}
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Version"
            onChange={(e) => setVersion(e.target.value)}
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Classname"
            onChange={(e) => setClassName(e.target.value)}
            defaultValue=""
            
          />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={classheadTeacher}
          label="classheadTeacher"
          onChange={(e)=> setClassheadTeacher(e.target.value)}>
          
        </Select>
          <Button variant='contained' >Add Teacher</Button>
        </div>
        </Box>
    )
}
export default CreateClasses