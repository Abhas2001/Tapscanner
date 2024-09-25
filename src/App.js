import logo from './logo.svg';
import './App.css';
import { WebcamCapture } from './WebcamCapture';
import { useState } from 'react';
import Image from './image';
import Pdf from './Pdf';


function App() {
  const[option,setoption] = useState(0);
const[imgaddress , setimgaddress] = useState("");

console.log(option);
  return (
    option == 0 ?
   <WebcamCapture imgaddress={imgaddress} setimgaddress={setimgaddress} option={option} setoption={setoption}/>
   : option==1 ?
   <Image imgaddress={imgaddress} setoption={setoption}/>
   :
   <Pdf setoption={setoption} imgaddress={imgaddress} />

  );
}

export default App;
