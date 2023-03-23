'use client';

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const SpeechContext = createContext({})

export const SpeechContextProvider = ({ children }) => {
    const [textValue, setTextValue] = useState('')
    const [selectedVoice, setSelectedVoice] = useState(0);
    const [voices, setVoices] = useState([]);


   

  useEffect(()=>{
    const synth = window.speechSynthesis;

    if (!synth)
  return <span>Oh No!.. your browser does not support Speech Synthesis</span>;
   })

  


//handleSpeech

    const speak = (text, voice) => {     
         const synth = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(textValue);

          utterance.voice = synth.getVoices()[selectedVoice];

          synth.speak(utterance);
    }

   
   


      




    return (
        <SpeechContext.Provider value={{
           textValue,
           setTextValue,
           selectedVoice,
           setSelectedVoice,
           voices,
           setVoices,
           speak
    
            }}>
            {children}
        </SpeechContext.Provider>
    )
};

export const useSpeechContext = () => useContext(SpeechContext);