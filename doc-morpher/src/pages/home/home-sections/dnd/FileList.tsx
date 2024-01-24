

const FileItem = function (props) {
  const handleDelete = () => {
    // Pass the file object to the parent component for deletion
    props.onDelete(props.name);
  };

  return (
    <div className="file-item md:w-96 w-72 h-20 flex justify-evenly flex-row items-center cursor-pointer transition-all bg-[#93827f] ">
      <h3 className="file-title w-[35%]  text-left"> {props.name} </h3>
      <p className="file-size"> {props.size}b </p>
      <button onClick={handleDelete} className="delete-btn">
        Delete
      </button>
    </div>
    
  );
};

export default function FileList(props) {

  const handleDelete = (fileName) => {
    // Filter out the selected file from the fileList
    const updatedFileList = props.fileList.filter((file) => file.name !== fileName);
    
    // Update the fileList in the parent component
    props.onDelete(updatedFileList);
  };
  return (
    <div className="file-list w-[100%] h-auto my-auto flex flex-col gap-1">
      {props.fileList.map((item) => (
        <FileItem key={item.name} name={item.name} size={item.size}  onDelete={handleDelete} />
      ))}
    </div>
  );
}
