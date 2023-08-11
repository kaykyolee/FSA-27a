import * as React from 'react';
// import {theme} from './theme';
import { mockTransactions } from './Data';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const totalRevenue = mockTransactions.reduce((acc, transaction) => acc + parseFloat(transaction.cost), 0);

  return (
    
    <Box sx={{ width: '60em', height: '30em', mt: 2, p: 2, border: '2px solid #EEE', textAlign: 'left', paddingLeft: '10em', paddingRight:'7.5em' }}>        

    <Typography variant="h4" sx={{ pb: 2, fontWeight:'bolder' }}>
    DASHBOARD
    </Typography>
    <Typography variant="h6" sx={{ pb: 5, fontSize:'small' }}>
    Welcome to your dashboard
    </Typography>
    
      <Grid container spacing={0}>
        <Grid item xs={4}>

          <Item sx={{backgroundColor:'lightgray'}}>
            <Typography sx={{fontWeight:'bold'}}>
            Revenue Generated:
            </Typography>
              <Typography>{totalRevenue}</Typography>
          </Item>
        </Grid>
        <div>
        
        <Grid container sx= {{overflow:'scroll', display:'inline-block', marginLeft:'0.1em', marginTop:'1.5em',width:'40em', height:'17em',border: '2px solid #EEE', textAlign:'left', backgroundColor:'lightgray'}}>
          <Grid item xs={12}>
          <Item sx={{backgroundColor:'lightblue'}}>
            <Typography sx={{fontWeight:'bold'}}>RECENT TRANSACTIONS   
            </Typography>
          </Item>
          {mockTransactions.map((transaction, index) => (
          <Item key={index} sx={{backgroundColor:'lightgray'}}>
          <Typography variant="h9" >User:</Typography>
          <Typography>{transaction.txId}</Typography>
          <Typography variant="h9">Date:</Typography>
          <Typography>{transaction.date}</Typography>
          <Typography variant="h9">Total Cost: </Typography>
          <Button variant="contained" color="primary">{transaction.cost}</Button>

          </Item>
          ))}</Grid>
        </Grid>
        </div>

      </Grid>
    </Box>
    
  );
}