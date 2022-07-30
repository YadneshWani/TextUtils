import React, {useState} from 'react';

export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("Handle on Change ");
        setText(event.target.value);
    }

    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = ()=>{
        let newText='';
        setText(newText);
    }

    const handleESClick = ()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "));
    }

    const [text,setText]=useState('Enter text here');
    
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==="dark"?"#0d2a3d":"white",color:props.mode==="dark"?"white":"black"}} onChange={handleOnChange} rows="10"></textarea>
        </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
    <button className="btn btn-primary mx-1" onClick={handleESClick} >Remove Extra Spaces</button>
    </div>
    <div className="conatiner my-3" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
