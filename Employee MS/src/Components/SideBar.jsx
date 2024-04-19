import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
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
            color: "black", 
            }}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </Button>
        </ListItem>

        <ListItem>   
            <Button style={{
            justifyContent: "flex-start", 
            textTransform: "none", 
            width: '100%', 
            color: "black", 
            }}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Employee" />
            </Button>
        </ListItem>

        <ListItem>   
            <Button style={{
            justifyContent: "flex-start", 
            textTransform: "none", 
            width: '100%', 
            color: "black", 
            }}>
                <ListItemIcon>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Department" />
            </Button>
        </ListItem>

        <ListItem>   
            <Button style={{
            justifyContent: "flex-start", 
            textTransform: "none", 
            width: '100%', 
            color: "black", 
            }}>
                <ListItemIcon>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </Button>
        </ListItem>

        <ListItem>   
            <Button style={{
            justifyContent: "flex-start", 
            textTransform: "none", 
            width: '100%', 
            color: "black", 
            }}>
                <ListItemIcon>
                    <PowerSettingsNewIcon />
                </ListItemIcon>
                <ListItemText primary="Log Out" />
            </Button>
        </ListItem>

      </List>
    </Drawer>
  );
}

export default Sidebar;