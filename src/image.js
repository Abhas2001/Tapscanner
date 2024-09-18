import React, { useEffect } from 'react';
import './image.css';
import { useState } from 'react';

const Image = (props) => {
    const[style,setstyle]=useState("basic");
    const[option,setoption]=useState("")
    const[filters , setfilters] = useState(false);
    const[count,setcount] = useState(false);
    const[val,setval] = useState("");
 const[rotation , setrotation] = useState(0)
 const[resize , setresize] = useState(0)
    const handledelete = () =>{
        props.setoption(0);
    }

    const handlerotate = () => {
      
      setrotation(rotation+1);
      console.log(rotation);
     
    }

    useEffect(()=>{
      if(rotation==1){
        setstyle("")
        setstyle("rotate")
      }
      if(rotation==2){
        
          setstyle("")
          setstyle("rotate2")
        
      }
      if(rotation==3){
        
        setstyle("")
        setstyle("rotate3")
      
    }
    if(rotation>3){
        
      setstyle("")
      setstyle("rotatef")
    
  }
    },[rotation])


    const handlefilters = () =>{
        
          setfilters(!filters)
    }

    const handleinvert = () =>{
        setoption("invert")
    }

    const handlesepia = () => {
      
            setoption("")
            setoption("sepia")
      
    }
    const handlebandw = () => {
        setoption("")
        setoption("bandw")
    }
    const handlelessbright = () => {
        setoption("")
        setoption("lessbright")
    }

    const handleimage = () => {
        setoption("")
        setoption("image")
    }
    const handlebright = () => {
        setoption("")
        setoption("bright")
    }

    const handlecrop = () => {
      setresize(resize+1);
    }

    useEffect(()=>{
      if(resize==1){
        setstyle("")
        setstyle("crop")
      }
      if(resize==2){
        setstyle("")
        setstyle("crop1")
      }
      if(resize==3){
        setstyle("")
        setstyle("crop2")
      }
      if(resize>3){
        setstyle("")
        setstyle("basic")
      }
    },[resize])
  return (
    <div className='fullcontainer'>
    <div className='img'>
      <div className='imgnfilter'>
        <div className='imgfilter'>
     <img className={style+option} src={props.imgaddress}/>
        </div>
        <div>
     { filters==true ?
     <div className='filters'>
        <button onClick={handleimage} ><img className="image" src={props.imgaddress}/></button>
        <button onClick={handlebandw}><img className="bandw" src={props.imgaddress}/></button>
<button onClick={handlelessbright} ><img className="lessbright" src={props.imgaddress}/></button>
<button onClick={handlebright}><img className="bright" src={props.imgaddress}/></button>
<button onClick={handleinvert}><img className="invert" src={props.imgaddress}/></button>
<button onClick={handlesepia}><img className="sepia" src={props.imgaddress}/></button>

     </div>
     :
     <div></div>
}
     </div>
     </div>
     <div className='btnn'>
     <button onClick={handlerotate}>
     <img className='filter' src='https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/rotate_left.png'/>
       <div>Rotate</div>
        </button> 
     <button onClick={handlecrop}>

     <img className='filter' src='https://static.vecteezy.com/system/resources/previews/026/220/106/non_2x/crop-icon-symbol-design-illustration-vector.jpg'/>
       <div>Resize</div>
     </button>
     <button>

     <img className='filter' src='https://www.shutterstock.com/image-vector/contrast-icon-brightness-adjust-signs-260nw-1741922180.jpg'/>
       <div>Contrast</div>
     </button>
     <button className={val} onClick={handlefilters}>
        <img className='filter' src='https://www.shutterstock.com/image-vector/filter-icon-solid-style-about-260nw-2199621737.jpg'/>
       <div>Filters</div>
     </button>
     <button onClick={handledelete}>
        <img className='filter' src='https://static.vecteezy.com/system/resources/previews/030/343/284/non_2x/delete-icon-symbol-design-illustration-vector.jpg'/>
       <div>Delete</div></button>
     </div>
     <div onClick={handledelete} className='btn'><button>Keep Scanning</button> <button className='pdfbtn'>Save PDF</button></div>
    </div>
    
    </div>
  )
}

export default Image
