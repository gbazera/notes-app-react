import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main'
import AddNote from './components/AddNote';
import ViewNote from './components/ViewNote';

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
		}
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

	const editNote=(id, title, content)=>{
		const newNoteList = noteList
		newNoteList.forEach(note => {
			if(note != null && note.id === id){
				//code goes here
			}
		});
		setNoteList([...newNoteList])
	}

	const addNote=(title, content)=>{
		const newNoteList = noteList
		
		const newNote = {
			id: newNoteList.length,
			title,
			content,
			pinned: false
		}

		newNoteList.push(newNote)

		setNoteList([...newNoteList])
		console.log(noteList)
	}

	return (
		<div className="App">
			<Header />
			<AddNote addNote={addNote} />
			<Main noteList={noteList} pinNote={pinNote} deleteNote={deleteNote} />
			<ViewNote editNote={editNote} />
		</div>
	);
}

export default App;
