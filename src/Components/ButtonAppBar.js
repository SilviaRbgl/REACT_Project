import React from "react";
// import * as React from 'react';
import '../index.css';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';

function ButtonAppBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <LiveTvRoundedIcon />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               movies
            </Typography>
            <Button
              variant="contained"
              color="info"
            >Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default ButtonAppBar;
