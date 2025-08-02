import React, { useState } from 'react';
export default function Textform(props) {
    const handleUpClick =() =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE", "success");
        
    }
        const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

      const handleClearClick =() =>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared Text!!", "success");
      }


    const handleOnChange =(event) =>{
        setText(event.target.value)

    }

    const [text, setText] = useState("");
    return (
        <>
        <div >
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container my-2' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes Read</p>
            <h2>Preview</h2>
            {text.length>0?text:"Enter something in the textbox above to preview it here"}
        </div>
        </>
    )
}
