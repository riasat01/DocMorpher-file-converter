
import logo1 from "../../assets/Navbar-logo/qr-code main.png";
import logo2 from "../../assets/Navbar-logo/arrow.png";
import logo3 from "../../assets/Navbar-logo/add.png";
import { useContext, useEffect, useState } from "react";
import QRCode from "qrcode";
import TextContext from "../../Hooks/textContext/TextContext";



const QrCode = () => {
  const context = useContext(TextContext);

  // Check if context is defined and extract textData
  const textData = context?.textData ?? '';
  console.log(textData);

  
  const [file, setFile] = useState(
    "Change me with the converted data from the backend"
  );
  const [imageURL, setImageURL] = useState("");

//   get the data from server and set it to the setFile function
  useEffect(() => {
    fetch("")
    .then(res => res.json())
    .then(data => {
        setFile(data);
    })
  });

//   generating the qr code
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(file);
      setImageURL(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="py-8 z-10 font-serif">
      <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
        <div className="w-full md:w-1/2 md:mx-auto flex flex-col items-center py-8">

          
          
          {imageURL ? (
            // qr code, based on user's converted data
            <a href={imageURL} download>
              <img className="mx-auto w-[200px] md:w-[300px] rounded-md" src={imageURL} alt="image" />
            </a>
          ) : (
            // default qr code, contains nothing
            <img
            src={logo1}
            className="mx-auto w-[200px] md:w-[300px] rounded-md"
            alt="logo1"
          />
          )}
          <div className="w-[50%] md:w-[55%] mx-auto">
            <button
              onClick={generateQrCode}
              className="w-full rounded-md text-black font-semibold text-lg px-2 py-3 bg-gradient-to-r from-[#00f190] to-[#00a2fa] my-2"
            >
              <img src={logo2} alt="logo2" className="w-6 inline-block" />
              Generate QR Code
            </button>
            <a href={imageURL} download>
              <button className="w-full rounded-md text-black font-semibold text-lg px-2 py-3 bg-gradient-to-r from-[#00f190] to-[#00a2fa] my-2">
                <img src={logo2} alt="logo2" className="w-6 inline-block" />
                Download
              </button>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-8 text-center">
          <div className="">
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
              File Details
            </h1>
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
              File Type
            </h1>
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
              File Size
            </h1>
          </div>
          <button className="rounded-md  text-black font-semibold text-lg px-2 py-3 bg-gradient-to-r from-[#00f190] to-[#00a2fa] my-2">
            <img src={logo3} alt="logo3" className="w-6 inline-block mr-2" />
            Create QR Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default QrCode;
