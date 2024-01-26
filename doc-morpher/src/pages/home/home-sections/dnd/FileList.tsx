

import FileItem from "./FileItem";

interface FileListProps {
  fileList: { name: string; size:number}[];
  onDelete: (updatedFileList: {name:string; size:number}[])=> void;
}


const FileList:React.FC<FileListProps> = (props) => {
  const handleDelete = (fileName: string) => {
    // Filter out the selected file from the fileList
    const updatedFileList = props.fileList.filter((file) => file.name !== fileName);
    
    // Update the fileList in the parent component
    props.onDelete(updatedFileList);
  };

  return (
    <div className="file-list w-[100%] h-auto my-auto flex flex-col gap-1">
      {props.fileList.map((item) => (
        <FileItem key={item.name} name={item.name} size={item.size} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FileList;
