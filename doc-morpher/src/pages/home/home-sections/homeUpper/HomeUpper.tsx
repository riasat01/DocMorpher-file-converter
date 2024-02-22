//@ts-nocheck
import { Typewriter } from 'react-simple-typewriter'

const HomeUpper = () => {

    const handleType = (count: number) => {
        // access word count number
        console.log(count)}
      
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
    
    return (

        <div>
            <div> 
       <h1 className="text-center font-bold text-5xl py-5">
       {" "}
         File Converter (Free & premium)</h1>
        <h2 className="text-center font-semibold text-2xl py-2">Easily convert files from one format to another</h2>
            </div>
        <div className="bg-black text-white flex justify-center items-center pb-10 rounded-lg text-5xl my-10">
        <h1  className='text-center' style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
          FEEL FREE TO CONVERT <br />{' '} 
          <span style={{ color: 'red', fontWeight: 'bold',marginLeft:'40px' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['PDF', 'Image', 'Text']}
              loop={5}
              cursor
            //   cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
            FILES
        </h1>
        </div>
      </div>
    );
};

export default HomeUpper;