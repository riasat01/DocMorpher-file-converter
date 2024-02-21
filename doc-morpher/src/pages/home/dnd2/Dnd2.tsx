//@ts-nocheck
import Dropzone from 'react-dropzone';

const Dnd2 = () => {
    const handleDrop = (acceptedFiles) => {
        acceptedFiles.forEach(file => {
            console.log("File:", file);
            console.log("Size:", file.size); // Log the size of each file
        });
    };
    return (
   
        <div>
             <Dropzone
            onDrop={handleDrop}
            accept='image/*'
            minSize={1024}
            maxSize={3072000}
            >
                {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDtagAccept,
                isDragReject,
            })=>{
                const additionalClass = isDtagAccept
                ? 'accept'
                : isDragReject
                ? 'reject'
                : "";

                return(
                    <div
                    {
                        ...getRootProps({
                            className: `dropzone ${additionalClass}`,
                        })
                    }
                    >
                        <input {...getInputProps()}/>
                        <img
                        className='w-64'
                        src='https://i.ibb.co/nP3ZB4f/open-uri20151207-3-a4cl5i.gif'
                        />

                    </div>
                );
            }}
            </Dropzone>
        </div>
    );
};

export default Dnd2;