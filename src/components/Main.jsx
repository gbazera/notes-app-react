function Main(props) {
	return (
		<main>
			<h4>Pinned</h4>
            <div className="notes">
				{props.noteList.map((note) =>
					note.pinned ? (
						<div className="note" key={note.id}>
							<h3>
								{note.id}. {note.title}
							</h3>
							<p>{note.content}</p>
                            <button onClick={()=> props.pinNote(note.id)}>PIN</button>
						</div>
					) : null
				)}
			</div>
			<h4>Your notes</h4>
			<div className="notes">
				{props.noteList.map((note) =>
					!note.pinned ? (
						<div className="note" key={note.id}>
							<h3>
								{note.id}. {note.title}
							</h3>
							<p>{note.content}</p>
                            <button onClick={()=> props.pinNote(note.id)}>PIN</button>
						</div>
					) : null
				)}
			</div>
		</main>
	);
}

export default Main;
