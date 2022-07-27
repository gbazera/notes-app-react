function ViewNote(props){
    return(
        <div className="popup">
            <div className="top">
                <input type="text" value={props.title}/>
                <button className="btn ico"><bx className="bx bx-x"></bx></button>
            </div>
        </div>
    )
}

export default ViewNote;