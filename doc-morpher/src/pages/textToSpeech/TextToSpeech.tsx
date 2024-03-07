//@ts-nocheck
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
      
        <h1 className="text-5xl py-10 font-bold
        ">Text to Speech Converter</h1>
        <textarea placeholder="type your text here" className="textAreaStyle outline rounded-lg w-96 px-5 pt-5" onChange={(e)=>{setText(e.target.value)}}></textarea>
        <button className="buttonStyle btn btn-outline text-lg" onClick={()=>{handleOnClick()}}>Listen</button>
      
    </div>
  );
}

export default TextToSpeech;
