
// @ts-nocheck
import React, { useContext, useState } from 'react';
import TextContext from '../../Hooks/textContext/TextContext';


const Pdf = () => {
  const { setTextData } = useContext(TextContext);
  const [pdfInput, setPdfInput] = useState(null);
  const [password, setPassword] = useState('');
  const [allText, setAllText] = useState([]);
  const [afterUpload, setAfterUpload] = useState(false);

  const handlePdfInputChange = (event) => {
    setPdfInput(event.target.files[0]);
  };

  const extractText = async () => {
    try {
      if (!window.pdfjsLib) {
        throw new Error('PDF.js library not loaded');
      }

      const file = pdfInput;
      if (!file || file.type !== 'application/pdf') {
        throw new Error('Select a valid PDF file');
      }

      const fr = new FileReader();
      fr.readAsDataURL(file);

      fr.onload = async () => {
        const url = fr.result;
        let pdf;

        if (password) {
          pdf = await window.pdfjsLib.getDocument({ url, password }).promise;
        } else {
          pdf = await window.pdfjsLib.getDocument(url).promise;
        }

        const pages = pdf.numPages;
        const textArray = [];

        for (let i = 1; i <= pages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const text = textContent.items.map((s) => s.str).join('');
          textArray.push(text);
        }

        setAllText(textArray);
        setAfterUpload(true);
        setTextData(textArray[0]);
      };
    } catch (err) {
      alert(err.message);
    }
  };

  const handleUploadClick = () => {
    extractText();
  };

  const handleAfterProcess = () => {
    // Implement post-processing logic here if needed
  };

  return (
    <div>
      <h1 className='text-center font-bold text-2xl py-2'>PDF To Text Extractor</h1>
      <div className="pdfwork mt-3 flex justify-center items-center flex-col w-[100%] ">
      

        <span className='font-medium px-10'>Select PDF</span>
        <div className='flex gap-5'>
        <input type="file" className="selectpdf btn btn-outline btn-accent mt-4 p-3 " onChange={handlePdfInputChange} />
        </div>

        <div className='flex flex-col md:flex-row p-3 ml-20 gap-5'>

        <span>Password :</span>
        <input
          type="password"
          className="pwd"
          placeholder="optional"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          </div>
        <button className="upload btn  btn-outline btn-accent " onClick={handleUploadClick}>
          Upload
        </button>


        {afterUpload && (
          <div className="pdfwork flex justify-center items-center flex-col w-[100%] ">

            <div className='flex gap-5 my-5'>

            <span className=' font-medium'>Select Page</span>
            {/* Dropdown menu for selecting the page */}
            <select className="selectpage" onChange={handleAfterProcess}>
              {allText.map((text, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
              </div>
            <a
              href={`data:text/plain;charset=utf-8,${encodeURIComponent(allText[0])}`}
              className="download font-medium mb-5  btn  btn-outline btn-accent "
              download
            >
              Download Pdf Text
            </a>
            <textarea className="pdftext textarea textarea-accent" value={allText[0]} readOnly />
          </div>
        )}


    {
      afterUpload &&
      <button className="another btn  btn-outline btn-accent mt-5 " onClick={() => window.location.reload()}>
          Extract Another PDF
        </button>
    }    

      </div>
    </div>
  );
};

export default Pdf;
