import React, { createContext, useState } from 'react';
import { TextContextType } from './types';

const TextContext = createContext<TextContextType | undefined>(undefined);

export const TextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [textData, setTextData] = useState<string>('');

  const navigateToPdfPage = () => {
    // Navigate to PDF page logic goes here
    console.log('Navigating to PDF page...');
  };


  return (
    <TextContext.Provider value={{ textData, setTextData, 
      navigateToPdfPage  
    }}>
      {children}
    </TextContext.Provider>
  );
};

export default TextContext;
