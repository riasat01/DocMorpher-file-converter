// @ts-nocheck
import jsPDF from 'jspdf';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { CircleLoader} from 'react-spinners';




const Image = () => {
    const [photos, setPhotos] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleUpload =(acceptedFiles) => {
        setLoading(true);

        console.log('logging drop/selected file', acceptedFiles);
        const url = 'https://api.escuelajs.co/api/v1/files/upload';
        const formData =new FormData();
        formData.append('file', acceptedFiles[0]);

        fetch(url,{
            method:'POST',
            body: formData,
        })
        .then((response)=> {
            if(response.ok){
                setPhotos(acceptedFiles);
                setLoading(false);
            }else{
                console.error(response);
            }
        })
        .catch((error)=>{
            console.error(error);
        });
   
      
    };

    const pdfGenerate = () => {
        var  doc = new jsPDF("p", "pt", "a4" );

        photos.forEach((photo, index) =>{
            if (index !== 0) {
                doc.addPage();
            }

            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();
            var img = URL.createObjectURL(photo);
            doc.addImage(img, null, 0, 0, width, height, null, 'FAST');
        });

        doc.save('images.pdf');
    };




    return (
        <div className='flex justify-center items-center flex-col gap-10 py-10'>
            <Helmet>
                <title >Image-pdf</title>
            </Helmet>

            <h1 className='font-bold text-5xl'>Image to pdf</h1>
            <div>
            <div className='form-group mt-5'></div>
            <Dropzone
            onDrop={handleUpload}
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
                        className='w-80 rounded'
                        src='https://i.ibb.co/nP3ZB4f/open-uri20151207-3-a4cl5i.gif'
                        />

                    </div>
                );
            }}
            </Dropzone>
        </div>
        <div>
            {loading === true && <CircleLoader size={150} color="#008F2C" />}
        </div>

            <div>
                {
                    photos !==false && (
                        <div>
                            <h2 className='flex justify-center items-center pb-5 font-bold text-2xl'>
                                preview of the created pdf
                            </h2>
                            <div>
                                {
                                    photos.map((photo, index) =>(
                                        <img className='w-[400px] rounded-lg'
                                        key={index}
                                        src={URL.createObjectURL(photo)}
                                        alt={`Image ${index}`}
                                        />
                                    ))
                                }
                            </div>


                            <div className='flex justify-center items-center py-5'>
                                <button className='text-lg btn'
                                    onClick={pdfGenerate}
                                    disabled={!photos.length}
                                    >
                                        Download pdf
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
            
};
export default Image;