//@ts-nocheck

import { useState } from "react";

const [lodding, setLodding] = useState(true);
const [lodFile, setLodFile] = useState(true);
// Handle file selection
const handleFilechange = (e) => {
setFile(e.target.files[0]);
}
// Handle form submission
const handleSubmit = async (e) => {
e.preventDefault();
const formData = new FormData(); 
formData.append('file', file);
setLodFile(false);
try {
// Make the Axios request
const response = await axios.post('http://localhost:5000/convert', formData,{
 headers:z{
'Content-Type': 'multipart/form-data',
 }
});
settodding(false);
console.log("File uploaded successfully:', response.data);
// Handle success (you can update UI or perform other actions here)
 } catch (error) {
console.error('Error loading file:', error);
setLodding(true)
// Handle error (display an error message or take appropriate action)
 };

const handleDownload= async () => {
try {
setDownloading(true);
const response = await axios.get('http://localhost:5000/convert', { responseType: 'blob',



setDownloading(false);
} catch (error) {
console.error('Error downloading file:', error);
 setError(error.message);
setDownloading(false);
}
};
return (
<div className='p-36'>
<h2>Upload PowerPoint File</h2>
<form onsubmit={handleSubmit}>
<input accept=".doc, .docx" type="file" onChange={handleFileChange} />
<button type="submit">Upload</button>
</form>
lodFile? " " : <div>
{
lodding? <Spinner color="info" size="xl" />
: <button onClick={handleDownload} disabled={downloading}>
</button>
}

{error && <div>Error: [error]</div>}
</div>
}
</div>
);
};
export default FileUpload;