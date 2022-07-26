function Main(props) {
	return (
		<main>
			<div className="container">
				<div className="top">
					<p className="heading">Pinned</p>
				</div>
				<div className="notes">
					{props.noteList.map((note) =>
						note != null && note.pinned ? (
							<div className="note" key={note.id}>
								<p className="title">
									{note.id}. {note.title}
								</p>
								<p>{note.content}</p>
								<button onClick={() => props.pinNote(note.id)}>
									UNPIN
								</button>
								<button
									onClick={() => props.deleteNote(note.id)}
								>
									DELETE
								</button>
							</div>
						) : null
					)}
				</div>
			</div>
			<div className="container">
				<div className="top">
					<p className="heading">Your notes</p>
				</div>
				<div className="notes">
					{props.noteList.map((note) =>
						note != null && !note.pinned ? (
							<div className="note" key={note.id}>
								<p className="title">
									{note.id}. {note.title}
								</p>
								<p>{note.content}</p>
								<button onClick={() => props.pinNote(note.id)}>
									PIN
								</button>
								<button
									onClick={() => props.deleteNote(note.id)}
								>
									DELETE
								</button>
							</div>
						) : null
					)}
				</div>
			</div>
		</main>
	);
}

export default Main;
