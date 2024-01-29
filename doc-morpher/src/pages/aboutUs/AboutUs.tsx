
interface AboutUsProps {}


const AboutUs: React.FC<AboutUsProps> = () => {
    return (
        <div>
            <div className="text-center font-bold text-3xl py-5">
                About Us
            </div>
            <div className="px-10">
                
Step into the realm of limitless possibilities at our file converter site, where innovation meets convenience. Revolutionizing the way you interact with digital content, we offer a seamless experience for converting documents, presentations, images, and more. Our user-friendly platform ensures effortless navigation, empowering you to transform files with ease. Immerse yourself in the world of efficiency with our integrated payment system, providing a secure and hassle-free transaction experience. Explore the convenience of QR-based file sharing, simplifying distribution and enhancing collaboration. Committed to redefining your digital journey, we strive to be your trusted ally in the realm of file conversion. Join us on this transformative adventure, where versatility, reliability, and swiftness converge to elevate your digital interactions. Welcome to a new era of file conversion – where possibilities know no bounds.
            </div>



            <div className="text-center font-bold text-3xl pt-5">
                FAQ
            </div>


            <div className="p-10">
            <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4"/> 
    <div className="collapse-title text-xl font-medium">
    How does our file converter work?
    </div>
    <div className="collapse-content"> 
      <p>You can easily drag and drop any file  into the drag and drop area in the home page or import file from your device. And by clicking the convert button you can easily convert it as you want. </p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What makes our platform user-friendly?
    </div>
    <div className="collapse-content"> 
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Tell us about the payment system. How secure is it?
    </div>
    <div className="collapse-content"> 
      <p>It is really a safe and easy method of payment. users can go for it without any hesitation </p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    How does QR-based file sharing benefit users?
    </div>
    <div className="collapse-content"> 
      <p>A user can share their files so easily with qr base oportunity. it is superb to use</p>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default AboutUs;