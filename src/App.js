import logo from './logo.svg';
import './App.css';
import { WebcamCapture } from './WebcamCapture';
import { useState } from 'react';
import Image from './image';
import Pdf from './Pdf';


function App() {
  const[option,setoption] = useState(0);
const[imgaddress , setimgaddress] = useState("");
const[pdfstyle ,setpdfstyle] = useState("");


console.log(pdfstyle);
  return (
    option == 0 ?
   <WebcamCapture imgaddress={imgaddress} setimgaddress={setimgaddress} option={option} setoption={setoption}/>
   : option==1 ?
   <Image setpdfstyle={setpdfstyle} imgaddress={imgaddress} setoption={setoption}/>
   :
   <Pdf pdfstyle={pdfstyle} setoption={setoption} imgaddress={imgaddress} />

  );
}

export default App;
