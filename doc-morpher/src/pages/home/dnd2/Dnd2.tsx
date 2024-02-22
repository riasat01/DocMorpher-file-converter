//@ts-nocheck
import React, { useContext } from 'react';
import Dropzone from 'react-dropzone';
import Image2 from '../../image/Image2';
import Pdf2 from './../../pdf/Pdf2';
import TextContext from '../../../Hooks/textContext/TextContext';
// import { TextContext } from './TextContext';

const Dnd2 = () => {
    const { setTextData } = useContext(TextContext);
    const [droppedFileType, setDroppedFileType] = React.useState(null);
    const [droppedImage, setDroppedImage] = React.useState(null);
    const handleDrop = (acceptedFiles) => {
        acceptedFiles.forEach(file => {
            console.log("File:", file);
            console.log("Size:", file.size); // Log the size of each file
            if (file.type.startsWith('image')) {
                setDroppedFileType('image');
                setDroppedImage(file); // Set the dropped image
                setTextData(file.type);
            }
        });
    };

    return (
        <div>
            <Dropzone
                onDrop={handleDrop}
                accept='image/*,.pdf'
                minSize={1024}
                maxSize={3072000}
            >
                {({
                    getRootProps,
                    getInputProps,
                    isDragAccept,
                    isDragReject,
                }) => {
                    const additionalClass = isDragAccept
                        ? 'accept'
                        : isDragReject
                            ? 'reject'
                            : "";

                    return (
                        <div
                            {...getRootProps({
                                className: `dropzone ${additionalClass}`,
                            })}
                        >
                            <input {...getInputProps()} />
                            <img
                                className='w-64'
                                src='https://i.ibb.co/nP3ZB4f/open-uri20151207-3-a4cl5i.gif'
                            />
                            {isDragAccept && <p>Drop the files here...</p>}
                            {isDragReject && <p>Unsupported file type...</p>}

                            {/* Render the dropped file component */}
                            {droppedFileType === 'image' && <Image2 />}
                            {droppedFileType === 'pdf' && <Pdf2 />}
                        </div>
                    );
                }}
            </Dropzone>
            {droppedFileType === 'image' && <Image2 droppedImage={droppedImage} />}
        </div>
    );
};

export default Dnd2;
