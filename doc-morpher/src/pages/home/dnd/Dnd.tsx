const Dnd = () => {
  return (
    <div className="flex justify-evenly md:flex-row flex-col  my-10 py-3 bg-gray-200">
      {/* dnd part */}

      <div className="dnd flex justify-center md:flex-row flex-col">
        <div className="dndPart ">
          <div className="flex justify-center items-center">

         
          <div className="dndBox w-60 bg-slate-400 h-60 flex justify-center items-center text-white rounded-lg font-semibold  text-2xl ">
            Drag & drop here
          </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="import btn btn-outline btn-accent mt-4 ">
              Import File

            </button>
          </div>
        </div>
        <div className="convertToPart flex justify-center items-center ml-6 font-bold m-4">
          Convert To
        </div>
      </div>

      {/* choose convert part */}

      <div className="convert flex flex-col justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <label className="font-bold my-5" htmlFor="converterInput">choose converter file</label>
          <select className="select select-accent w-full max-w-xs my-5">
           
            <option selected>Pdf</option>
            <option>doc</option>
            <option>ppt</option>
            <option>image</option>
          </select>
        </div>
        <button className="converterBtn btn btn-outline btn-accent my-5">
          Convert
        </button>
      </div>
    </div>
  );
};

export default Dnd;
