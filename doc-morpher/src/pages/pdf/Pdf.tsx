import React, { useState } from 'react';

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleConvert = async () => {
    const formData = new FormData();
    formData.append('pdfFile', file!);

    try {
      const response = await fetch('http://localhost:5000/convert', {
        method: 'POST',
        body: formData,
      });
   
      if (response.ok) {
        // Handle the response, e.g., download the converted file.
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'converted.docx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        const errorMessage = await response.text();
        console.error('Error converting PDF to DOC', errorMessage);
      }
    } catch (error) {
      console.error('Error converting PDF to DOC', error);
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleConvert} disabled={!file}>
        Convert to DOC
      </button>
    </div>
  );
};

export default App;
