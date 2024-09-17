import logo from './logo.svg';
import './App.css';
import { WebcamCapture } from './WebcamCapture';
import { useState } from 'react';
import Image from './image';


function App() {
  const[option,setoption] = useState(0);
const[imgaddress , setimgaddress] = useState("");
console.log(option);
  return (
    option == 0 ?
   <WebcamCapture imgaddress={imgaddress} setimgaddress={setimgaddress} option={option} setoption={setoption}/>
   :
   <Image imgaddress={imgaddress} setoption={setoption}/>

  );
}

export default App;
