import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Doc = () => {
  const [error, setError] = useState(null);

  const convertToPDF = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData();
    const fileInput = document.querySelector('input[type="file"]');

    if (!fileInput.files[0]) {
      setError("Please select a file.");
      return;
    }

    formData.append("file", fileInput.files[0]);

    try {
      const response = await axios.post(
        "http://localhost:5000/docx-to-pdf",
        formData,
        {
          responseType: "blob", // Receive response as Blob
        }
      );

      // Create a blob URL for the PDF file
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Trigger download of the PDF file
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", "converted_file.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setError(null);
    } catch (error) {
      console.error("Error converting file:", error);
      setError("An error occurred during the conversion. Please try again.");
    }
  };
  return (
    <div>
      <div>
        <div>
          <NavLink to="admin">Dashboard</NavLink>
        </div>
        <h1>DOCX to PDF Converter</h1>
        <form onSubmit={convertToPDF}>
          <input type="file" name="file" accept=".docx" required />
          <button type="submit">Convert to PDF</button>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Doc;
