

interface FileItemProps {
    name: string;
    size: number;
    onDelete: (name: string) => void;
}

const FileItem:React.FC<FileItemProps> = (props) => {
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

export default FileItem;
