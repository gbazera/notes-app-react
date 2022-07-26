function AddNote() {
	return (
		<div className="container add-note">
			<div className="top">
				<p className="heading">Add new note</p>
			</div>
			<input type="text" placeholder="Type note title" />
			<textarea cols="30" rows="10" placeholder="Type note"></textarea>
			<button type="submit">ADD</button>
		</div>
	);
}

export default AddNote;
