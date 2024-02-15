import { ChangeEvent, useState } from "react";
import DragArea from "./DragArea";
import FileList from "./FileList";

interface File {
  name: string;
  size: number;
}

interface DndProps {}

const Dnd: React.FC<DndProps> = () => {
  const [fileList, setFileList] = useState<File[]>([]);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const addFile = (file: File) => {
    setFileList([...fileList, file]);
    if (file.type === "application/pdf") {
      setPdfFile(file);
    }
  };

  // const navigateToPdfPage = () => {
  //   // Implementation to navigate to the PDF page
  //   // For example:
  //   // history.push('/pdf-page');
  // };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const files = fileInput.files;
if (files){
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      addFile(file);
    }
  }
if (fileInput){    
    fileInput.value = "";
  }
};

  const handleDelete = (updatedFileList:File[]) => {
    setFileList(updatedFileList);
    const pdfIndex = updatedFileList.findIndex(file => file.type === "application/pdf");
    if (pdfIndex === -1) {
      setPdfFile(null);
    }
  };

  const navigateToPdfPage = () => {
    window.location.href = '/pdf';
    console.log("Navigate to PDF page");
  };

  

  return (

    <div>
      <div> 
       <h1 className="text-center font-bold text-3xl py-5"> File Converter (Free & premium)</h1>
        <h2 className="text-center font-semibold text-xl py-2">Easily convert files from one format to another</h2>
      </div>
    <div className="flex justify-evenly md:flex-row flex-col  my-10 py-3 bg-gray-200">
      {/* dnd part */}

      <div className="dnd flex justify-center md:flex-row flex-col">
        <div className="dndPart flex justify-center gap-10 md:flex-row flex-col  ">
          <div className="flex flex-col justify-center items-center">

         
          <DragArea addFile={addFile} navigateToPdfPage={navigateToPdfPage} />


         <div className="my-2 " >

         <FileList fileList={fileList} onDelete={handleDelete}/>
         </div>
          </div>
          <div className="flex justify-center flex-col gap-10 items-center">
          <input
              type="file"
              onChange={handleFileInputChange}
              className="import btn btn-outline btn-accent mt-4 p-3"
              multiple 
            />

{
      // isDraggedOver
      pdfFile
       && (
        <button className=" btn btn-outline btn-accent" onClick={navigateToPdfPage}>Open PDF</button>
      )}
          
            
          </div>
        </div>
        {/* <div className="convertToPart flex justify-center items-center ml-6 font-bold m-4">
          Convert To
        </div> */}
      </div>

      {/* choose convert part */}

      {/* <div className="convert flex flex-col justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <label className="font-bold my-5" htmlFor="converterInput">choose converter file</label>
          <select className="select select-accent w-full max-w-xs my-5">
           
            <option>Pdf</option>
            <option>doc</option>
            <option>ppt</option>
            <option>image</option>
          </select>
        </div>
        <button className="converterBtn btn btn-outline btn-accent my-5">
          Convert
        </button>
      </div> */}
    </div>
    </div>
  );
};

export default Dnd;
