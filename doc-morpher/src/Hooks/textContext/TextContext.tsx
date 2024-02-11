import React, { createContext, useState } from 'react';
import { TextContextType } from './types';

const TextContext = createContext<TextContextType | undefined>(undefined);

export const TextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [textData, setTextData] = useState<string>('');

  return (
    <TextContext.Provider value={{ textData, setTextData }}>
      {children}
    </TextContext.Provider>
  );
};

export default TextContext;
