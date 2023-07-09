import React ,{useState} from 'react'

export default function TextForm(props) {

    
    const handleUpClick =() =>{
        // console.log("Uppercase was clicked");   
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleOnChange =(event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleLoClick = () =>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    
    const handleClearClick = () =>{
        let newText=("");
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    
    const handleClipboardClick = () =>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied","success")
    }
    
   const msg = new SpeechSynthesisUtterance()
   const handleTextToSpeech =(msg)=>{
    msg.text=text
    window.speechSynthesis.speak(msg)
    props.showAlert("Text to speech sucessful","success")
   }

   const handleSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces are Removed","success")
   }
    

    const [text,setText] = useState('');
    return (
        <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}  onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter your text here'></textarea>       
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}> Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}> Clear Text</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClipboardClick}> Copy to clipboard</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleSpaces}> Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1 my-2" onClick={()=>handleTextToSpeech(msg)}> Text To Speech</button>
    </div>
    <div className="container my-1" style={{color:props.mode==='light'?'black':'white'}}    >
        <h2>Your text summmary</h2>
        <p>{text.split(" ").length}words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length}minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textBox above to view it here!!"}</p>
    </div>
    </>
  )
}
