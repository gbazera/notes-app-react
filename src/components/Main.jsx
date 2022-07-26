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
									<p className="title">{note.title}</p>
									<button
										onClick={() => props.pinNote(note.id)}
									>
										<i className="bx bxs-pin"></i>
									</button>
								</div>
								<p className="content">{note.content}</p>
								<div className="bot">
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
									<p className="title">{note.title}</p>
									<button
										onClick={() => props.pinNote(note.id)}
									>
										<i className="bx bx-pin"></i>
									</button>
								</div>
								<p className="content">{note.content}</p>
								<div className="bot">
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
