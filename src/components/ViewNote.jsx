function ViewNote(props){
    const updateTitle=(newTitle)=>{
        if(newTitle.trim() !== '' || newTitle.trim().length !== 0){
            props.updateTitle(props.openNote.id, newTitle)
        }
    }

    const updateContent=(newContent)=>{
        if(newContent.trim() !== '' || newContent.trim().length !== 0){
            props.updateContent(props.openNote.id, newContent)
        }
    }

    if(!props.viewOpen) return null;
    return(
        <>
            <div className="overlay"></div>
            <div className="popup">
                <div className="top">
                    <p className="date">{props.openNote.date}</p>
                    <button className="btn-ico" onClick={props.closeViewNote}><i className="bx bx-x"></i></button>
                </div>
                <input onChange={(e)=> {updateTitle(e.target.value)}} type="text" defaultValue={props.openNote.title} />
                <textarea onChange={(e)=> {updateContent(e.target.value)}} rows="14" defaultValue={props.openNote.content}></textarea>
            </div>
        </>
    )
}

export default ViewNote;