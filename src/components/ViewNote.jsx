function ViewNote(props){
    if(!props.viewOpen) return null;

    return(
        <>
            <div className="overlay"></div>
            <div className="popup">
                <div className="top">
                    <p className="date">{props.openNote.date}</p>
                    <button onClick={props.closeViewNote}><i className="bx bx-x"></i></button>
                </div>
                <input type="text" value={props.openNote.title} />
                <textarea rows="10" value={props.openNote.content}></textarea>
            </div>
        </>
    )
}

export default ViewNote;