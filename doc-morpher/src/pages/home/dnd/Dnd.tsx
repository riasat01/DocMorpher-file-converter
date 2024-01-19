const Dnd = () => {
  return (
    <div className="flex justify-evenly my-10 py-3 bg-gray-200">
      {/* dnd part */}

      <div className="dnd flex justify-center">
        <div className="dndPart">
          <div className="dndBox w-60 bg-slate-400 h-60 flex justify-center items-center text-white rounded-lg font-semibold  text-2xl">
            Drag & drop here
          </div>
          <div className="flex justify-center items-center">
            <button className="import btn btn-outline btn-accent mt-4 ">
              Import File

            </button>
          </div>
        </div>
        <div className="convertToPart flex justify-center items-center ml-6 font-bold">
          Convert To
        </div>
      </div>

      {/* choose convert part */}

      <div className="convert flex flex-col justify-evenly">
        <div>
          <label className="font-bold" htmlFor="converterInput">choose converter file</label>
          <select className="select select-accent w-full max-w-xs">
           
            <option selected>Pdf</option>
            <option>doc</option>
            <option>ppt</option>
            <option>image</option>
          </select>
        </div>
        <button className="converterBtn btn btn-outline btn-accent">
          Convert
        </button>
      </div>
    </div>
  );
};

export default Dnd;
