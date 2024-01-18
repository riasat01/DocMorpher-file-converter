import React, { useState, useRef } from "react";
import './Dnd.css'




function Dnd() {
  const [images,setImges] = useState([]);
  const [isDraging, setIsDraging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles(){
    fileInputRef.current.click();
  }


  function onFileSelect(event){
    const files = event.target.files;
    if(files.length == 0) return;
    for(let i= 0; i< files.length; i++){
      if(files[i].type.split('/')[0] !=='image')continue;
      if(!images.some((e)=>e.name == files[i].name)){
        setImges((prevImages)=>[
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }
  function deleteImage(index){
    setImges((prevImages)=> 
      prevImages.filter((_, i)=> i !==index)
    );
    // console.log(index);
  }

  function onDragOver(event){
    event.preventDefault();
    setIsDraging(true);
    event.dataTransfer.dropEffect = 'copy';
  }

  function onDragLeave(event){
    event.preventDefault();
    setIsDraging(false);
  }

  function onDrop(event){
    event.preventDefault();
    setIsDraging(false);
    const files = event.dataTransfer.files;
  }

  function uploadImages (){
    console.log('images:', images);
  }

    return (
      
      <div className="card p-3 shadow-md rounded-md truncate">
        <div className="top text-center">
          <p className="font-bold text-blue-500">
            Drag & drop image uploading
          </p>
        </div>
        <div className="drag-area h-36 rounded-md border-2 border-dashed text-blue-500 bg-slate-300 flex flex-col justify-center items-center mt-4 "  style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        onDragOver={(event) => {
          event.preventDefault();
          onDragOver(event);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          onDragLeave(event);
        }}
        onDrop={(event) => {
          event.preventDefault();
          onDrop(event);
        }}>

          {
            isDraging? (
              <span className="slect">
              Drag & drop image here or {" "}
              </span>
            ):(
              <span className="select  text-blue-500 ml-2 cursor-pointer duration-500" role="button" onClick={selectFiles}>
              Browse
          </span>
            )

          }


     
           
            <input type="file" name="file" className="file" multiple ref={fileInputRef} onChange={onFileSelect}/>
        </div>

        <div className="container w-[100%] h-auto flex justify-start flex-wrap max-h-52 overflow-y-auto mt-3">
            {
              images.map((images,index)=>(
                <div className="image w-20 mr-2 h-20 relative mb-2" key={index}>
                <span className="delete absolute top-[-2] right-2 text-xl cursor-pointer z-50 text-blue-500" onClick={()=> deleteImage(index)}>&times;</span>
             <img className="w-[100%] h-[100%] rounded-md" src={images.url} alt="{images.name}" />
             </div>
 
       
              ))
            }


            </div>
           <div className="text-center">

        <button className="btn btn-wide bg-blue-600 "
        onClick={uploadImages}> Upload</button>
        </div>
        
      </div>
        
      
    )
  }
  
  export default Dnd