import React, { useState } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

function TextToSpeech() {
  const [text,setText] = useState('');
  const {speak} = useSpeechSynthesis();

  const handleOnClick = () => {
    speak({text:text})
  }

  return (
    <div className="flex justify-center items-center py-5 gap-6 flex-col">
      
        <h1 className="text-xl font-bold
        ">Text to Speech Converter</h1>
        <textarea className="textAreaStyle outline rounded-lg w-96" onChange={(e)=>{setText(e.target.value)}}></textarea>
        <button className="buttonStyle btn text-lg" onClick={()=>{handleOnClick()}}>Listen</button>
      
    </div>
  );
}

export default TextToSpeech;
