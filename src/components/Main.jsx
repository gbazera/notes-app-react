function Main(props) {
	return (
		<main>
			<div className="container">
				<div className="top">
					<p className="heading">PINNED</p>
				</div>
				<div className="notes">
					{props.noteList.map((note) =>
						note != null && note.pinned ? (
							<div className="note" key={note.id}>
								<div className="top">
									<p className="title" onClick={()=> props.openViewNote(note)}>{note.title.slice(0, 20)}</p>
									<button
										onClick={() => props.pinNote(note.id)}
									>
										<i className="bx bxs-pin"></i>
									</button>
								</div>
								<p className="content" onClick={()=> props.openViewNote(note)}>{note.content.slice(0, 100)}</p>
								<div className="bot">
									<p className="date">{note.date}</p>
									<button
										onClick={() =>
											props.deleteNote(note.id)
										}
									>
										<i className="bx bx-trash"></i>
									</button>
								</div>
							</div>
						) : null
					)}
				</div>
			</div>
			<div className="container">
				<div className="top">
					<p className="heading">YOUR NOTES</p>
				</div>
				<div className="notes">
					{props.noteList.map((note) =>
						note != null && !note.pinned ? (
							<div className="note" key={note.id}>
								<div className="top">
									<p onClick={()=> props.openViewNote(note)} className="title">{note.title.slice(0, 20)}</p>
									<button
										onClick={() => props.pinNote(note.id)}
									>
										<i className="bx bx-pin"></i>
									</button>
								</div>
								<p onClick={()=> props.openViewNote(note)} className="content">{note.content.slice(0, 100)}</p>
								<div className="bot">
									<p className="date">{note.date}</p>
									<button
										onClick={() =>
											props.deleteNote(note.id)
										}
									>
										<i className="bx bx-trash"></i>
									</button>
								</div>
							</div>
						) : null
					)}
				</div>
			</div>
		</main>
	);
}

export default Main;
