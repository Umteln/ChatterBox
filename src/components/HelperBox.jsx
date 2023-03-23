import React from 'react'
import {Typography, Grid} from '@mui/material'
import { helperWords } from '@/helperwords'
import WordBox from './WordBox'

const HelperBox = () => {
  return (
    <div style={{ height: '55vh', textAlign:'center', padding:'3rem', overflow:'scroll'}}> 
     <Typography variant="h5" color="initial" fontWeight='bold'>Helper Box</Typography>
     <Grid container spacing={0}>
        {helperWords.map((word, index) => (
            <Grid item xs={4} p={3} key={index}>
               <WordBox text={word}  />
             </Grid>
  
        ))}
       

     </Grid>
    </div>
       
  )
}

export default HelperBox