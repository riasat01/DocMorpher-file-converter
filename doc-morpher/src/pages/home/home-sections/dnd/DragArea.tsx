import { useState } from "react";


const DragArea = (props) => 
    //  function DragArea(props)
      {
        const [isDraggedOver, setIsDraggedOver] = useState(false);
      
        const dragEnterHandler = (e) => {
          e.preventDefault();
          setIsDraggedOver(true);
        };
      
        const dragLeaveHandler = (e) => {
          e.preventDefault();
          setIsDraggedOver(false);
        };
      
        const dragOverHandler = (e) => {
          e.preventDefault();
        };
      
        const dragDropHandler = (e) => {
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