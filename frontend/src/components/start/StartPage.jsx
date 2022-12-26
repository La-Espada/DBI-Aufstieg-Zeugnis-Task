import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function StartPage() {

    let navigate = useNavigate();
  return (
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() =>{ navigate("/students")}}>Schüler</Button>
          <Button color="inherit" onClick={() => navigate("/teacher")}>Lehrer</Button>
          <Button color="inherit" onClick={() => navigate("/classes")}>Klasse</Button>

        </Toolbar>
      </AppBar>

  );
}