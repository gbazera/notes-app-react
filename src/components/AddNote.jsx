function AddNote() {
	const revealRest=()=>{
		const addNote = document.querySelector('.add-note')
		addNote.classList.add('active')
	}

	return (
		<div className="container add-note">
			<form>
				<input onFocus={revealRest} type="text" placeholder="New note title.." />
				<textarea rows="5" placeholder="Take a note.."></textarea>
				<button className="btn" type="submit">ADD</button>
			</form>
		</div>
	);
}

export default AddNote;
