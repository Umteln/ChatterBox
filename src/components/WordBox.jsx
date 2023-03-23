import React from 'react'
import {Paper, Typography} from '@mui/material'

const WordBox = ({text}) => {
  return (
    <Paper  component='button' elevation={3} style={{
    backgroundColor: '#af52bf',
    color:'#fff',
    borderRadius:'5px', 
    textAlign:'center', 
    margin: 'auto', 
    justifyContent:'center',
    width:'100px',
     height:'100px', 
     cursor:'pointer'}}
       >
         <Typography variant='h6' color='Primary' >
             {text}
        </Typography>
            
  
    </Paper>
  )
}
export default WordBox;