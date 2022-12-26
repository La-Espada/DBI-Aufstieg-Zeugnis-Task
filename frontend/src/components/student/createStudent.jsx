import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function CreateStudent(){
  const [id,setId] = useState();
  const [version, setVersion] = useState();
  const [firstname,setFirstname]= useState();
  const [lastname,setLastname]= useState();
  const [gender,setGender] = useState();
  const [birthDate,setBirthDate] = useState();
  const [age,setAge] = useState();
  const [subjects,setSubjects] = useState();
  const [passed,setPassed] = useState();

  const [rel,setREL] =useState();
  const [d,setD] =useState();
  const [e,setE] =useState();
  const [ggp,setGGP] =useState();
  const [besp,setBESP] =useState();
  const [am,setAM] =useState();
  const [nw2,setNW2] =useState();
  const [tinf,setTINF] =useState();
  const [pos1,setPOS] =useState();
  const [dbi,setDBI] =useState();




  async function create(){
    let student = {id,version,firstname,lastname,gender,birthDate,age,subjects,passed}
    let result = await fetch("http://localhost:8080/teacher/add",{
      method:'Post',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
          },
          body:JSON.stringify(student)
        }
    );
    if(result.ok){
      //navigate("/teacher");
    }
  }
    return(
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs ={4}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            onChange={(e) => setId(e.target.value)}
            defaultValue="ID"
          />
          </Grid>
          <Grid item xs ={4}>
          <TextField
            required
            id="outlined-required"
            label="Requird"
            onChange={(e) => setVersion(e.target.value)}
            defaultValue="Version"
          />
          </Grid>
          <Grid item xs ={4}>
            <TextField
            required
            id="outlined-required"
            label="Requird"
            onChange={(e) => setFirstname(e.target.value)}
            defaultValue="Firstname"
            
          /></Grid>
          <Grid item xs ={4}>
           <TextField
            required
            id="outlined-required"
            label="Requird"
            onChange={(e) => setLastname(e.target.value)}
            defaultValue="Lastname"
          />
          </Grid>
          <Grid item xs ={1}>
      <InputLabel>Gender</InputLabel>
      </Grid>
      <Grid item xs ={3}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Age"
          onChange={(e)=> setGender(e.target.value)}>
          <MenuItem value={"MALE"}>MALE</MenuItem>
          <MenuItem value={"FEMALE"}>FEMALE</MenuItem>
        </Select>
        </Grid>
        <Grid item xs ={4}>
        <TextField
            required
            id="outlined-required"
            label="Required"
            onChange={(e) => setAge(e.target.value)}
            defaultValue="Age"
            
          />
          </Grid>
          <Grid item xs ={1}>
          <InputLabel>Passed</InputLabel>
          </Grid>
          <Grid item xs ={12}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Age"
          onChange={(e)=> setGender(e.target.value)}>
          <MenuItem value={"true"}>true</MenuItem>
          <MenuItem value={"false"}>false</MenuItem>
        </Select>
        </Grid>
        <Grid item xs ={2}>
        <InputLabel>REL:</InputLabel>

        </Grid>
        <Grid item xs ={5}>
        <InputLabel>Wintersemester:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rel}
          label="REL"
          onChange={(e)=> setREL(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs ={5}>
        <InputLabel>Sommersemester:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rel}
          label="REL"
          onChange={(e)=> setREL(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <InputLabel>D</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rel}
          label="REL"
          onChange={(e)=> setD(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        <InputLabel>E</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={e}
          label="E"
          onChange={(e)=> setE(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        <InputLabel>GGP</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ggp}
          label="ggp"
          onChange={(e)=> setGGP(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        <InputLabel>BESP</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={besp}
          label="BESP"
          onChange={(e)=> setBESP(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        <InputLabel>AM</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={am}
          label="AM"
          onChange={(e)=> setAM(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        <InputLabel>NW2</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nw2}
          label="NW2"
          onChange={(e)=> setNW2(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        <InputLabel>TINF</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tinf}
          label="TINF"
          onChange={(e)=> setTINF(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        <InputLabel>POS1</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pos1}
          label="POS1"
          onChange={(e)=> setPOS(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        <InputLabel>TINF</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tinf}
          label="TINF"
          onChange={(e)=> setTINF(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
          <Button variant='contained' onClick={create}>Add Teacher</Button>
        
        </Grid>
        </Box>
    )

}
export default CreateStudent


        
