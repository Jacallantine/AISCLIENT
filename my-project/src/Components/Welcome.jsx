import React, { useState } from 'react'; 
import Option from "../Components/Option.jsx"

function Welcome() {
  const [SlideLeftNo, setSlideLeftNo] = useState(false);
  const [SlideLeft, setSlideLeft] = useState(false);
  const [showOption, setShowOption] = useState(false);



  let buttonClick = () =>{
    setSlideLeftNo(true)
    setTimeout(()=>{

            setShowOption(true)
            setSlideLeft(true)

    }, 700)
    
    

  }

    return <section className='flex h-[75vh] flex-col justify-center  items-center [overflow:hidden]'>
    


                  <div className={`flex flex-col items-center gap-y-10 ${SlideLeftNo ? 'SlideLeftNo' : ''}`}>
                  
                  <h1>Welcome to UniScout</h1>
                   <button className="max-md:w-[font-size:12px] c-button c-button--gooey [opacity:0] " onClick={buttonClick}> Need Help?
                  <div className="c-button__blobs">
                  <div></div>
                  <div></div>
                  <div></div>
                  </div>
                </button>

                  </div>

                  
                  {showOption && (

                  <div className={`h-1/3 transform translate-x-[1500px] ${SlideLeft ? 'SlideLeft' : ''}`}>
                  <Option/>
                  </div>)
                  }
               
    
                  


                 
    

  
  </section>

 



   
  }
  
  export default Welcome;