import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick=()=>
    {
        //console.log('upper case clicked' + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase"," Success")
    }
    const handleLoClick=()=>
    {
        //console.log('upper case clicked' + text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase"," Success")
    }
    const handleClearClick=()=>
    {
        //console.log('upper case clicked' + text);
        let newText= ('');
        setText(newText)
        props.showAlert("Text Cleared"," Success")
    }
    
    const handleOnChange=(event)=>
    {
        //console.log('on change')
        setText(event.target.value);
    }

  return (
    <>

    <div className="container">
        <h1>{props.heading}</h1>
      
<div className="mb-3">
   {/* <label for="myBox" class="form-label">Example textarea</label>  */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'#393345':'white'}} id="myBox" rows="8"></textarea>
</div>
<button type="button" disabled={text.length===0} className="btn btn-info" onClick={handleUpClick}>  Convert to Upper Case</button>
<button type="button" disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleLoClick} >  Convert to Upper Case</button>
<button type="button" disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleClearClick} >  clearText </button>



    <div>
        <h2>Your Text Summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and  characters {text.length}</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </div>

    </>
    
  );
}
              