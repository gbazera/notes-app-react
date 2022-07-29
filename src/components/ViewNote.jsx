import { useState } from "react";

function ViewNote(props){
    
    const [inputText, setInputText] = useState('')
    const [areaText, setAreaText] = useState('')
    
    const updateNote=()=>{
        if(inputText.trim() !== '' || inputText.trim().length !== 0) props.updateTitle(props.openNote.id, inputText)
        if(areaText.trim() !== '' || areaText.trim().length !== 0) props.updateContent(props.openNote.id, areaText)
    }

    if(!props.viewOpen) return null;
    return(
        <>
            <div className="overlay"></div>
            <div className="popup">
                <div className="top">
                    <p className="date">{props.openNote.date}</p>
                    <button onClick={props.closeViewNote}><i className="bx bx-x"></i></button>
                </div>
                <input onInput={(e)=> {updateNote(); setInputText(e.target.value) }} type="text" defaultValue={props.openNote.title} />
                <textarea onInput={(e)=> {updateNote(); setAreaText(e.target.value)}} rows="14" defaultValue={props.openNote.content}></textarea>
            </div>
        </>
    )
}

export default ViewNote;