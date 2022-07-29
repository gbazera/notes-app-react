import moment from 'moment';
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
			date: '27.07.2022',
			pinned: false
		},
		{
			id: 1,
			title: 'note title 2',
			content: 'note content man bruh idk',
			date: '25.07.2022',
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
			date: moment().format('DD.MM.YYYY'),
			pinned: false
		}

		newNoteList.push(newNote)

		setNoteList([...newNoteList])
		console.log(noteList)
	}

	const [viewOpen, setViewOpen] = useState(false)
	const [openNote, setOpenNote] = useState()

	const openViewNote=(note)=>{
		console.log(openNote)
		setViewOpen(true)
		setOpenNote(note)
	}

	const closeViewNote=()=>{
		console.log(openNote)
		setViewOpen(false)
		setOpenNote()
	}

	return (
		<div className="App">
			<Header />
			<AddNote addNote={addNote} />
			<Main noteList={noteList} pinNote={pinNote} deleteNote={deleteNote} openViewNote={openViewNote}/>
			<ViewNote editNote={editNote} closeViewNote={closeViewNote} viewOpen={viewOpen} openNote={openNote}/>
		</div>
	);
}

export default App;
