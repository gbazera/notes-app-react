import { useState } from 'react';

function AddNote(props) {
	const revealRest = () => {
		const addNote = document.querySelector('.add-note');
		addNote.classList.add('active');
	};

	const [inputText, setInputText] = useState('');
	const [areaText, setAreaText] = useState('');

	const hideRest = () => {
		const addNote = document.querySelector('.add-note');
		if (inputText.trim() === '' || inputText.trim().length === 0) {
			addNote.classList.remove('active');
			setInputText('');
		}
	};

	const forceHideRest = () => {
		const addNote = document.querySelector('.add-note');
		addNote.classList.remove('active');
	};

	const clearForm=()=>{
		setInputText('')
		setAreaText('')
		forceHideRest()
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (
			(inputText.trim() === '' || inputText.trim().length === 0) &&
			(areaText.trim() === '' || areaText.trim().length === 0)
		) {
			console.log('fields are empty');
			return false;
		}

		props.addNote(inputText, areaText);
		clearForm()
	};

	return (
		<div className="container add-note">
			<form onSubmit={(e)=>handleSubmit(e)}>
				<input
					value={inputText}
					onChange={(e) => {
						setInputText(e.target.value);
					}}
					onFocus={revealRest}
					onBlur={hideRest}
					type="text"
					placeholder="New note title.."
				/>
				<textarea
					value={areaText}
					onChange={(e) => {
						setAreaText(e.target.value);
					}}
					rows="5"
					placeholder="Take a note.."
				></textarea>
				<button
					className="btn"
					type="submit"
				>
					ADD
				</button>
			</form>
		</div>
	);
}

export default AddNote;
