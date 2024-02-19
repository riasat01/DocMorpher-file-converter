import { DragEvent, ChangeEvent, useState } from "react";

interface DragAreaProps {
  addFile: (file: File) => void;
  // navigateToPdfPage: () => void; 
}

const DragArea: React.FC<DragAreaProps> = ({ addFile }) => {
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const [droppedFile, setDroppedFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);


  const dragEnterHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(true);
  };

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(false);
  };

  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setDroppedFile(file);
    setIsUploaded(false); // Reset upload state
    setIsDraggedOver(false);
    addFile(file); // Pass the dropped file to the addFile function
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const file = fileInput.files?.[0] || null;
    setDroppedFile(file);
    setIsUploaded(false); // Reset upload state

    if (file) {
      addFile(file); // Pass the selected file to the addFile function
    }
    
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleUploadClick = () => {
    if (droppedFile) {
      addFile(droppedFile);
      setIsUploaded(true);
    }
  };

  return (
    <div
      className={`drag-area md:w-[500px] w-72 bg-slate-400 md:h-[400px] h-60 flex justify-center items-center text-white rounded-lg font-semibold text-2xl ${isDraggedOver ? "drag-over" : ""}`}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dragDropHandler}
      onDragOver={dragOverHandler}
    >
      <input
        type="file"
        onChange={handleFileInputChange}
        style={{ display: "none" }}
      />
      <div>Drag & drop here</div>
      {droppedFile && (
        <div>
          <p>Selected file: {droppedFile.name}</p>
          {!isUploaded && (
            <button onClick={handleUploadClick}>Upload</button>
          )}
          </div>
      )}
      
      {/* {file && file.type === "application/pdf" && (
        <button onClick={navigateToPdfPage}>Open PDF</button>
      )} */}
    </div>
  );
};

export default DragArea;
