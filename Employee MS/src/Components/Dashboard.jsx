import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
   
  </Box>
);

const AdminCard = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div" align="center">
        Admin
      </Typography>

        <br/>
      <Divider sx={{ borderColor: '#000', borderWidth: 1 }}/>
      <br/>

      <Typography variant="h7" component="div" align="left">
        Total:
      </Typography>
    </CardContent>
  </React.Fragment>
);

const EmployeeCard = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          Employee
        </Typography>

        <br/>
        <Divider sx={{ borderColor: '#000', borderWidth: 1 }}/>
        <br/>

        <Typography variant="h7" component="div" align="left">
            Total:
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const SalaryCard = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          Salary
        </Typography>

        <br/>
        <Divider sx={{ borderColor: '#000', borderWidth: 1 }}/>
        <br/>

        <Typography variant="h7" component="div" align="left">
            Total:
        </Typography>
      </CardContent>
    </React.Fragment>
  );

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275}}>
        <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card>{AdminCard}</Card>
            </Grid>
            <Grid item xs={4}>
                <Card>{EmployeeCard}</Card>
            </Grid>
            <Grid item xs={4}>
                <Card>{SalaryCard}</Card>
            </Grid>
        </Grid>
    </Box>
  );
}
