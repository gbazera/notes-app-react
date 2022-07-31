import Note from './Note';

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
							<Note
								key={note.id}
								note={note}
								id={note.id}
								title={note.title}
								content={note.content}
								pinNote={props.pinNote}
								deleteNote={props.deleteNote}
								openViewNote={props.openViewNote}
								pinClass={'bxs-pin'}
							/>
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
							<Note
								key={note.id}
								note={note}
								id={note.id}
								title={note.title}
								content={note.content}
								pinNote={props.pinNote}
								deleteNote={props.deleteNote}
								openViewNote={props.openViewNote}
								pinClass={'bx-pin'}
							/>
						) : null
					)}
				</div>
			</div>
		</main>
	);
}

export default Main;
