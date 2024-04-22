import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

function TopBar() {
  return (
<Box sx={{ width: '80%', ml: 'auto' }}>
    <AppBar position="static" sx={{
      backgroundColor: 'white', 
      color: 'black', 
      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', 
      backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,0.12) 100%)' 
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{
          flexGrow: 1, 
          textAlign: 'center'
        }}>
          Employee Management System
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
  );
}

export default TopBar;
