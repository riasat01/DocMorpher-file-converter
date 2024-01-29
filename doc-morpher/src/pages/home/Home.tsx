// <<<<<<< HEAD
import { useState } from "react";
// =======
import Categories from "./home-sections/categories/Categories";
import Dnd from "./home-sections/dnd/Dnd";

// >>>>>>> 086e65a199595ab67d74ade57ecc05827494989e


const Home = () => {
    const [conversionStatus, setConversionStatus] = useState('');

    const convertDocToPdf = async () => {
        const inputDocPath = 'path/to/your/input.docx';
        const outputPdfPath = 'path/to/your/output.pdf';

        try {
            const response = await fetch('http://localhost:5000/convert-doc-to-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputDocPath,
                    outputPdfPath,
                }),
            });

            if (response.ok) {
                setConversionStatus('Document conversion successful');
            } else {
                setConversionStatus(`Document conversion failed: ${response.statusText}`);
            }
        } catch (error) {
            setConversionStatus(`Error during document conversion: ${error.message}`);
        }
    };
    return (
        <div>
<<<<<<< HEAD
            <h1>Document Conversion</h1>
            <button onClick={convertDocToPdf}>Convert Document to PDF</button>
            <p>{conversionStatus}</p>
=======
            <Dnd></Dnd>
            <Categories />
>>>>>>> 086e65a199595ab67d74ade57ecc05827494989e
        </div>
    );
};

export default Home;