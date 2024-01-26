import { DragEvent, useState } from "react";

interface DragAreaProps{
  addFile: (file: File) => void;
}
const DragArea: React.FC<DragAreaProps> = (props) => 
 
      {
        const [isDraggedOver, setIsDraggedOver] = useState(false);
      
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
      
          if (file) {
            props.addFile(file);
          }
        };
      
    return (
        <div className=" drag-area dndBox md:w-96 w-72 bg-slate-400 h-60 flex justify-center items-center text-white rounded-lg font-semibold  text-2xl " 
        onDragEnter={dragEnterHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dragDropHandler}
        onDragOver={dragOverHandler}>
            <div className="text-center">

            Drag & drop here <br /> {isDraggedOver && "Draged"}
            </div>
          </div>
    );
};

export default DragArea;