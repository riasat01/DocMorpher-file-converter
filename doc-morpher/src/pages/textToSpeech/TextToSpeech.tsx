import React, { useState } from "react";

// import './TextToSpeech.css'
import { useSpeechSynthesis } from 'react-speech-kit';

function TextToSpeech() {
  const [text,setText] = useState('');
  const {speak} = useSpeechSynthesis();

  const handleOnClick = () => {
    speak({text:text})
  }

  return (
    <div>
      
        <h1>Text to Speech Converter in React</h1>
        <textarea className="textAreaStyle" onChange={(e)=>{setText(e.target.value)}}></textarea>
        <button className="buttonStyle" onClick={()=>{handleOnClick()}}>Listen</button>
      
    </div>
  );
}

export default TextToSpeech;
