import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, {useState, useCallback, useEffect} from 'react'





const VoiceSelector = ({selectedVoice, setSelectedVoice}) => {
   const [voices, setVoices] = useState([]);
  


  useEffect(() => {
    const synth = window.speechSynthesis
    
    const getVoiceList =  () => {
        const newVoices = synth.getVoices();
            setVoices(newVoices);
        };

    getVoiceList();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = getVoiceList;
    }
  }, []);


  return (
    <FormControl sx={{ mt: 2}} fullWidth >
        <InputLabel id="voice=select" >Voices</InputLabel>
        <Select       
        id="voices"
        value={selectedVoice}
        label="Voice"
        onChange={(e) => setSelectedVoice(parseInt(e.target.value))}
        >
            <MenuItem value="">
                    <em>None</em>
            </MenuItem>
            {voices.map((voice, index) => (
                <MenuItem key={index} value={index}>
                {voice.name} ({voice.lang}) {voice.default && ' [Default]'}
                </MenuItem>
            ))}
        </Select>
    </FormControl> 
  );
};

export default VoiceSelector;

