function Note(props) {
	return (
		<div className="note">
			<div className="top">
				<p
					className="title"
					onClick={() => props.openViewNote(props.note)}
				>
                    {props.title.length > 15 ? (props.title.slice(0, 15)+'...') : (props.title)}
				</p>
				<button
					className="btn-ico"
					onClick={() => props.pinNote(props.id)}
				>
					<i className={"bx " + props.pinClass}></i>
				</button>
			</div>
			<p
				className="content"
				onClick={() => props.openViewNote(props.note)}
			>
				{props.content.length > 50 ? (props.content.slice(0, 50)+'...') : (props.content)}
			</p>
			<div className="bot">
				<p className="date">{props.date}</p>
				<button
					className="btn-ico"
					onClick={() => props.deleteNote(props.id)}
				>
					<i className="bx bx-trash"></i>
				</button>
			</div>
		</div>
	);
}

export default Note;
