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
 const[showinput,setshowinput] = useState(false);
    // const handledelete = () =>{
    //     props.setoption(0);
    // }
  const handleSave = () =>{
    props.setoption(2);
  }

  const handlecamera = () =>{
    props.setoption(0);
  }
    const handlerotate = () => {
      
      setrotation(rotation+1);
      console.log(rotation);
     
    }

    const handledelete = () => {
      props.setoption(0);
    }

    useEffect(()=>{
      if(rotation%2==1){
        setoption("")
        setstyle("")
        setstyle("rotate")
      }
      if(rotation%4==2){
        setoption("")
          setstyle("")
          setstyle("rotate2")
        
      }
      if(rotation%4==3){
        setoption("")
        setstyle("")
        setstyle("rotate3")
      
    }
    if(rotation%4==0){
      setoption("")
      setstyle("")
      setstyle("rotatef")
    
  }
    },[rotation])


    const handlefilters = () =>{
        
          setfilters(!filters)
    }

    const handleinvert = () =>{
      setstyle("")
      setoption("")
        setoption("basicinvert")
    }

    const handlesepia = () => {
            setstyle("")
            setoption("")
            setoption("basicsepia")
      
    }
    const handlebandw = () => {
      setstyle("")
        setoption("")
        setoption("basicbandw")
    }
    const handlelessbright = () => {
      setstyle("")
        setoption("")
        setoption("basiclessbright")
    }

    const handleimage = () => {
      setstyle("")
        setoption("")
        setoption("basicimage")
    }
    const handlebright = () => {
      setstyle("")
        setoption("")
        setoption("basicbright")
    }

    const handlecrop = () => {
      setresize(resize+1);
    }
     const handleshowinput = () => {
      setshowinput(!showinput);
     }
    useEffect(()=>{
      if(resize%2==1){
        setoption("")
        setstyle("")
        setstyle("crop")
      }
      if(resize%4==2){
        setoption("")
        setstyle("")
        setstyle("crop1")
      }
      if(resize%4==3){
        setoption("")
        setstyle("")
        setstyle("crop2")
      }
      if(resize%4==0){
        setoption("")
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
     {showinput == true ?
     <div>
     <input/>
     </div>
     :
     <div></div>
}
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
     <button onClick={handleshowinput}>

     <img className='filter' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlE3thMrkwF-6vXrNBxBbT-xvENrlIikbu9A&s'/>
       <div>Markup</div>
     </button>
     <button className={val} onClick={handlefilters}>
        <img className='filter' src='https://www.shutterstock.com/image-vector/filter-icon-solid-style-about-260nw-2199621737.jpg'/>
       <div>Filters</div>
     </button>
     <button onClick={handledelete}>
        <img className='filter' src='https://static.vecteezy.com/system/resources/previews/030/343/284/non_2x/delete-icon-symbol-design-illustration-vector.jpg'/>
       <div>Delete</div></button>
     </div>
     <div  className='btn'><button onClick={handlecamera}>Keep Scanning</button> <button onClick={handleSave} className='pdfbtn'>Save PDF</button></div>
    </div>
    
    </div>
  )
}

export default Image
