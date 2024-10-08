import React, { useRef } from 'react';
import html2pdf from "html2pdf.js";
import './pdf.css';
import ima from './images/dummy.jpg'


const Pdf = (props) => {
  const contentRef = useRef(); 
  const handleback = () => {
    props.setoption(0);
  }
  const handlestate = () =>{
    props.setoption(1);
  }

  const exportHTMLtoPDF = () => {
    const element = contentRef.current; 
    const imgElement = element.querySelector(`.${props.pdfstyle}`);
    const opt = {
      margin:       1,
      filename:     'exported_file.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 , backgroundColor:'#000000' }, 
      jsPDF:        { unit: 'mm', backgroundColor:'#000000', format:[100, 200], orientation: 'portrait' }
    };
  
    if (imgElement.complete) {
      
      html2pdf().from(element).set(opt).save('exported_file.pdf');
    } else {
      
      imgElement.onload = () => {
        html2pdf().from(element).set(opt).save('exported_file.pdf');
      };
    }
  };

  return (
      <>
   
      <div ref={contentRef} className="main"> 
       
        <img className={props.pdfstyle} src={props.imgaddress}/>
   
      
      </div>
      <div className='exportbtn'>
      <button onClick={handlestate} className="butt">Back</button>
        <button onClick={handleback} className="butt">Scan Again</button>
      <button onClick={exportHTMLtoPDF} className="butt">Export to PDF</button>
      </div>
      </>
  );
}

export default Pdf
