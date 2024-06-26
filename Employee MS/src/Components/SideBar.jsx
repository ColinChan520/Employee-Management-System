import React from 'react';
import {Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import CategoryIcon from '@mui/icons-material/Category';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Button from '@mui/material/Button';

function Sidebar() {
    return (
    <Drawer
      variant="permanent" 
      anchor="left"        
      sx={{
        width: '20%',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '20%',
          boxSizing: 'border-box',
          backgroundColor: 'black', 
          color: 'white', 
        },
      }}
    >

    <Typography variant="h6" component="div" style={{ padding: '16px' }}>
            Admin Menu
        </Typography>

        <Divider />

      <List>
        
        <ListItem>   
            <Button style={{
            justifyContent: "flex-start", 
            textTransform: "none", 
            width: '100%', 
            color: "white", 
            }}>
                <ListItemIcon style={{ color: 'white' }}>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ color: 'white' }}/>
            </Button>
        </ListItem>

        <ListItem>   
            <Button style={{
            justifyContent: "flex-start", 
            textTransform: "none", 
            width: '100%', 
            color: "white", 
            }}>
                <ListItemIcon style={{ color: 'white' }}>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Employee" sx={{ color: 'white' }}/>
            </Button>
        </ListItem>

        <ListItem>   
            <Button style={{
            justifyContent: "flex-start", 
            textTransform: "none", 
            width: '100%', 
            color: "white", 
            }}>
                <ListItemIcon style={{ color: 'white' }}>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Department" sx={{ color: 'white' }}/>
            </Button>
        </ListItem>

        <ListItem>   
            <Button style={{
            justifyContent: "flex-start", 
            textTransform: "none", 
            width: '100%', 
            color: "white", 
            }}>
                <ListItemIcon style={{ color: 'white' }}>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" sx={{ color: 'white' }}/>
            </Button>
        </ListItem>

        <ListItem>   
            <Button style={{
            justifyContent: "flex-start", 
            textTransform: "none", 
            width: '100%', 
            color: "white", 
            }}>
                <ListItemIcon style={{ color: 'white' }}>
                    <PowerSettingsNewIcon />
                </ListItemIcon>
                <ListItemText primary="Log Out" sx={{ color: 'white' }}/>
            </Button>
        </ListItem>

      </List>
    </Drawer>
  );
}

export default Sidebar;