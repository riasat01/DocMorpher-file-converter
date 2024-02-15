import { DragEvent, ChangeEvent, useState } from "react";

interface DragAreaProps {
  addFile: (file: File) => void;
  navigateToPdfPage: () => void; // Add navigateToPdfPage prop
}

const DragArea: React.FC<DragAreaProps> = ({ addFile, navigateToPdfPage }) => {
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);

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
    const droppedFile = e.dataTransfer.files[0];
    handleDroppedFile(droppedFile);
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const files = fileInput.files;
    if (files) {
      const uploadedFile = files[0];
      handleDroppedFile(uploadedFile);
    }
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleDroppedFile = (file: File | null) => {
    setIsDraggedOver(false);
    if (file && file.type === "application/pdf") {
      setFile(file);
      addFile(file);
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
      {/* {file && file.type === "application/pdf" && (
        <button onClick={navigateToPdfPage}>Open PDF</button>
      )} */}
    </div>
  );
};

export default DragArea;
