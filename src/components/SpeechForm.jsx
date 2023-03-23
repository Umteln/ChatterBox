import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState ,  useEffect} from 'react'
import VoiceSelector from './VoiceSelect';





const SpeechForm = () => {
  const [textValue, setTextValue] = useState('')
  const [selectedVoice, setSelectedVoice] = useState(0);

  useEffect(()=>{
    const synth = window.speechSynthesis;

    if (!synth)
  return <span>Oh No!.. your browser does not support Speech Synthesis</span>;
   })

   


//handleSpeech

    const handleSpeech = (e) => {
         e.preventDefault();
       
         const synth = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(textValue);

          utterance.voice = synth.getVoices()[selectedVoice];

          synth.speak(utterance);
    }
    console.log(selectedVoice)

  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{ textAlign: 'center', margin: 'auto', width:'50%', padding:'3rem'}}>
            <Typography variant='h5' style={{marginBottom:'.5rem', fontWeight:'bold'}}>Text-To-Speech</Typography>
            <form onSubmit={handleSpeech} style={{display:'flex', flexDirection:'column'}}>
                 <div>
                 <TextField
                    id='text-value'
                    label="Text-To-Speak"
                    placeholder='Enter text to speak...'
                    multiline
                    rows={4}
                    fullWidth
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                  />
                 </div>
                 <div>
                   <VoiceSelector   selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice}/>
                 </div>
                  <Button type='submit' variant='contained' color='secondary' style={{marginTop:'1rem'}}>Speak</Button>
            </form> 
           
        </div>
       <div style={{ textAlign: 'center', margin: 'auto', width:'50%'}}>
           <h4>Common Phrases</h4>
       </div>
    </div>
  )
}

export default SpeechForm