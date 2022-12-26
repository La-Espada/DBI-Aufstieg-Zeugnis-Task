import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { format } from 'date-fns';
import {DatePicker} from '@kasraghoreyshi/datepicker'
import { DayPicker } from 'react-day-picker';
import { useNavigate } from 'react-router-dom';


function CreateStudent(){

  const relig = "REL";
  const de ="D";
  const en = "E";
  const ggpb = "GGPB";
  const besps = "BESP";
  const ams = "AM";
  const nw2e = "NW2";
  const tinfe = "TINF";
  const pos1e = "POS1";
  const dbie = "DBI";

  
  const [id,setId] = useState();
  const [version, setVersion] = useState();
  const [firstname,setFirstname]= useState();
  const [lastname,setLastname]= useState();
  const [gender,setGender] = useState();
  const [birthDate,setBirthDate] = useState();
  const [age,setAge] = useState();
  const [wp,setWP]=useState();
  const [subjects,setSubjects] = useState();
  const [passed,setPassed] = useState();

  const [rel,setRELWintersemester] =useState();
  const [d,setDWintersemester] =useState();
  const [e,setEWintersemester] =useState();
  const [ggp,setGGPWintersemester] =useState();
  const [besp,setBESPWintersemester] =useState();
  const [am,setAMWintersemester] =useState();
  const [nw2,setNW2Wintersemester] =useState();
  const [tinf,setTINFWintersemester] =useState();
  const [pos1,setPOSWintersemester] =useState();
  const [dbi,setDBIWintersemester] =useState();

  const [relSom,setRELSommersemester] =useState();
  const [dSom,setDSommersemester] =useState();
  const [eSom,setESommersemester] =useState();
  const [ggpSom,setGGPSommersemester] =useState();
  const [bespSom,setBESPSommersemester] =useState();
  const [amSom,setAMSommersemester] =useState();
  const [nw2Som,setNW2Sommersemester] =useState();
  const [tinfSom,setTINFSommersemester] =useState();
  const [pos1Som,setPOSSommersemester] =useState();
  const [dbiSom,setDBISommersemester] =useState();

  const [wpe1subjcet,setWP1Subject] =useState();
  const [wpe2subject,setWP2Subject] =useState();

  const [wpe1Grade,setWP1Grade] =useState();
  const [wpe2grade,setWP2Grade] =useState();



  async function create(){
      	
    let reli = {
      "name":relig, 
      "ws":rel,
      "ss":relSom
    }
    let deu = {
      name:de,
      ws:d,
      ss:dSom
    }
    let eng = {
      name:en,
      ws:e,
      ss:eSom
    }
    let ggpbe = {
      name:ggpb,
      ws:ggp,
      ss:ggpSom
    }
    let bespss = {
      name:besps,
      ws:besp,
      ss:bespSom
    }
    let amss = {
      name:ams,
      ws:am,
      ss:amSom
    }
    let nw22 = {
      name:nw2e,
      ws:nw2,
      ss:nw2Som
    }
    let tinfee = {
      name:tinfe,
      ws:tinf,
      ss:tinfSom
    }
    let poss = {
      name:pos1e,
      ws:pos1,
      ss:pos1Som}
    let dbii ={
      name:dbie,
      ws:dbi,
      ss:dbiSom
    }

    let wp1={
      subject:wpe1subjcet,
      grade:wpe1Grade
    }

    let wp2={
      subject:wpe2subject,
      grade:wpe2grade
    }

    setWP([wp1,wp2])

    setSubjects([reli,deu,eng,ggpbe,bespss,amss,nw22,tinfee,poss,dbii])
    let student = {id,version,firstname,lastname,gender,birthDate,age,subjects,wp,passed}
    let result = await fetch("http://localhost:8080/student/add",{
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
      <Box sx={{ flexGrow: 1, p: 3 }}>
       <h1>Create Student:</h1>
        <Grid container spacing={2}>
        <Grid item xs ={3}>
          <TextField
            required
            id="outlined-required"
            label="ID"
            onChange={(e) => setId(e.target.value)}
            defaultValue=""
          />
          </Grid>
          <Grid item xs ={3}>
          <TextField
            required
            id="outlined-required"
            label="Version"
            onChange={(e) => setVersion(e.target.value)}
            defaultValue=""
          />
          </Grid>
          <Grid item xs ={3}>
            <TextField
            required
            id="outlined-required"
            label="Firstname"
            onChange={(e) => setFirstname(e.target.value)}
            defaultValue=""/>
      </Grid>
          <Grid item xs ={4}>
           <TextField
            required
            id="outlined-required"
            label="Lastname"
            onChange={(e) => setLastname(e.target.value)}
            defaultValue=""
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
          label="Gender"
          onChange={(e)=> setGender(e.target.value)}>
          <MenuItem value={"MALE"}>MALE</MenuItem>
          <MenuItem value={"FEMALE"}>FEMALE</MenuItem>
        </Select>
        </Grid>
        <Grid item xs ={4}>
        <TextField
            required
            id="outlined-required"
            label="Age"
            onChange={(e) => setAge(e.target.value)}
            defaultValue=""/>
          </Grid>
          <Grid item xs ={1}>
          <InputLabel>Passed</InputLabel>
          </Grid>
          <Grid item xs ={4}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={passed}
          label="passed"
          onChange={(e)=> setPassed(e.target.value)}>
          <MenuItem value={"true"}>true</MenuItem>
          <MenuItem value={"false"}>false</MenuItem>
        </Select>
        </Grid>
        <Grid item xs ={1}>
          <InputLabel>birthDate</InputLabel>
          </Grid>
          <Grid item xs ={5}>
          <TextField
            required
            id="outlined-required"
            label="yyyy-mm-dd"
            onChange={(e) => setBirthDate(e.target.value)}
            defaultValue=""/>
        </Grid>
        <Grid item xs ={3}>
        <InputLabel>WP1: </InputLabel>
          </Grid>
          <Grid item xs ={4}>
          <TextField
            required
            id="outlined-required"
            label="Subject"
            onChange={(e) => setWP1Subject(e.target.value)}
            defaultValue=""/>
          </Grid>
          <Grid item xs ={4}>
          <TextField
            required
            id="outlined-required"
            label="Grade"
            onChange={(e) => setWP1Subject(e.target.value)}
            defaultValue=""/>
          </Grid>
          <Grid item xs ={3}>
        <InputLabel>WP2: </InputLabel>
          </Grid>
          <Grid item xs ={4}>
          <TextField
            required
            id="outlined-required"
            label="Subject"
            onChange={(e) => setWP2Subject(e.target.value)}
            defaultValue=""/>
          </Grid>
          <Grid item xs ={4}>
          <TextField
            required
            id="outlined-required"
            label="Grade"
            onChange={(e) => setWP2Grade(e.target.value)}
            defaultValue=""/>
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
          onChange={(e)=> setRELWintersemester(e.target.value)}>
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
          value={relSom}
          label="REL"
          onChange={(e)=> setRELSommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs ={2}>
        <InputLabel>D:</InputLabel>
        </Grid>
        <Grid item xs ={5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={d}
          label="d"
          onChange={(e)=> setDWintersemester(e.target.value)}>
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
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dSom}
          label="d"
          onChange={(e)=> setDSommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs ={2}>
        <InputLabel>E</InputLabel>
        </Grid>
        <Grid item xs ={5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={e}
          label="E"
          onChange={(e)=> setEWintersemester(e.target.value)}>
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
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={eSom}
          label="E"
          onChange={(e)=> setESommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={2}>
        <InputLabel>GGP:</InputLabel>
        </Grid>
        <Grid item xs = {5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ggp}
          label="ggp"
          onChange={(e)=> setGGPWintersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs = {5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ggpSom}
          label="ggp"
          onChange={(e)=> setGGPSommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs ={2}>
        <InputLabel>BESP:</InputLabel>
        </Grid>
        <Grid item xs =  {5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={besp}
          label="BESP"
          onChange={(e)=> setBESPWintersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs =  {5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bespSom}
          label="BESP"
          onChange={(e)=> setBESPSommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs = {2}>
        <InputLabel>AM</InputLabel>
        </Grid>
        <Grid item xs = {5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={am}
          label="AM"
          onChange={(e)=> setAMWintersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs = {5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={amSom}
          label="AM"
          onChange={(e)=> setAMSommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs = {2}>
        <InputLabel>NW2:</InputLabel>
        </Grid>   
        <Grid item xs = {5}>   
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nw2}
          label="NW2"
          onChange={(e)=> setNW2Wintersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid> 
        <Grid item xs = {5}>   
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nw2Som}
          label="NW2"
          onChange={(e)=> setNW2Sommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid> 
        <Grid item xs = {2}>
        <InputLabel>TINF:</InputLabel>
        </Grid>
        <Grid item xs = {5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tinf}
          label="TINF"
          onChange={(e)=> setTINFWintersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs = {5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tinfSom}
          label="TINF"
          onChange={(e)=> setTINFSommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs = {2}>
        <InputLabel>POS1</InputLabel>
        </Grid>
        <Grid item xs =  {5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pos1}
          label="POS1"
          onChange={(e)=> setPOSWintersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs =  {5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pos1Som}
          label="POS1"
          onChange={(e)=> setPOSSommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs = {2}>
        <InputLabel>TINF:</InputLabel>
        </Grid>
        <Grid item xs ={5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tinf}
          label="TINF"
          onChange={(e)=> setTINFWintersemester(e.target.value)}>
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
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tinfSom}
          label="TINF"
          onChange={(e)=> setTINFSommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
        <Grid item xs = {2}>
        <InputLabel>DBI:</InputLabel>
        </Grid>
        <Grid item xs ={5}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dbi}
          label="DBI"
          onChange={(e)=> setDBIWintersemester(e.target.value)}>
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
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dbiSom}
          label="DBI"
          onChange={(e)=> setDBISommersemester(e.target.value)}>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"N"}>N</MenuItem>
          <MenuItem value={"S"}>S</MenuItem>
        </Select>
        </Grid>
          <Button variant='contained' onClick={create}>Add Teacher</Button>
        
        </Grid>
        </Box>
    )

}
export default CreateStudent


        
