import { useState } from 'react';
import Main from './components/Main'
import AddNote from './components/AddNote';

function App() {
	const [noteList, setNoteList] = useState([
		{
			id: 0,
			title: 'note title 1',
			content: 'note content man bruh idk',
			pinned: false
		},
		{
			id: 1,
			title: 'note title 2',
			content: 'note content man bruh idk',
			pinned: true
		},
		{
			id: 2,
			title: 'note title 3',
			content: 'note content man bruh idk',
			pinned: false
		},
		{
			id: 3,
			title: 'note title 4',
			content: 'note content man bruh idk',
			pinned: false
		},
	])

	const pinNote=(id)=>{
		const newNoteList = noteList
		newNoteList.forEach(note => {
			if(note != null && note.id === id){
				note.pinned = !note.pinned
			}
		});
		setNoteList([...newNoteList])
	}

	const deleteNote=(id)=>{
		const newNoteList = noteList
		newNoteList.forEach(note => {
			if(note != null && note.id === id){
				delete newNoteList[newNoteList.indexOf(note)]
			}
		});
		setNoteList([...newNoteList])
	}

	const editNote=(id)=>{
		const newNoteList = noteList
		newNoteList.forEach(note => {
			if(note != null && note.id === id){
				const newContent = prompt('Enter new content:')
				if(newContent !== ''){
					note.content = newContent
				}
			}
		});
		setNoteList([...newNoteList])
	}

	return (
		<div className="App">
			<AddNote />
			<Main noteList={noteList} pinNote={pinNote} deleteNote={deleteNote} editNote={editNote}/>
		</div>
	);
}

export default App;
