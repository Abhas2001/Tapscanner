import Webcam from "react-webcam";
import { useCallback } from "react";
import { useState } from "react";
import React from "react";
import './WebcamCapture.css'
import Pdf from "./Pdf";
import useScreenSize from './useScreenSize';


const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER
};

export const WebcamCapture = (props) => {
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_USER);
  const [pics , setpics] = useState(0);
 
  const screenSize = useScreenSize();
  console.log(screenSize.width);
    
  const handleClick = React.useCallback(() => {
    setFacingMode(
      prevState =>
        prevState === FACING_MODE_USER
          ? FACING_MODE_ENVIRONMENT
          : FACING_MODE_USER
    );
  }, []);
  
  const webcamRef = React.useRef(null);

  const [val,setval] = useState(false);
  const[imageUrl,setimageUrl]=useState("");
  const[pdf,setpdf]=useState(false);
  const[contrast,setcontrast]=useState(false);
console.log(pdf);
  const handleCapture = () =>{

    const imageSrc = webcamRef.current.getScreenshot();
    setimageUrl(imageSrc);
     setval(!val);
     setpics(pics+1);
     
  }
  const handleretake = () =>{
    setval(!val);
  }
  const Openimage = () =>{
    props.setoption(1);
  }
   const openContrast = () =>{
    setcontrast(!contrast);
   }

   const handlePdf = () => {
      setpdf(true);
   }
   props.setimgaddress(imageUrl);
  return (

    <div>
    <div className="Container">

   
 

<div className="cam">
    { val==false?

      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        width={screenSize.width>640?520:320}
       
        ref={webcamRef}
        videoConstraints={{
          ...videoConstraints,
          facingMode
        }}
      />
     


      :
      <div className="imgUrl"> <img className="captured"  src={imageUrl}/></div>
      
}   
</div>    

<div className="capture">
  { val == false ?
<div className="candr">
<button onClick={handleClick}><img className="rear" src="https://cdn.vectorstock.com/i/1000x1000/53/93/camera-rotate-icon-vector-17385393.webp"/></button>

<button onClick={handleCapture} className="captur"><img src="https://static.vecteezy.com/system/resources/previews/007/522/948/original/camera-capture-icon-in-line-circle-button-vector.jpg"/></button>
 </div>
 :
 <div className="wid">

  <button onClick={handleretake} className="retake">Keep Scanning</button>
 </div>

  }
<button onClick={Openimage}>
  <img className="image" src={imageUrl}/>
  <div className="pics">{pics}</div>

</button>
</div> 

    </div>


  

    </div>
  );
};