import moment from 'moment';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main'
import AddNote from './components/AddNote';
import ViewNote from './components/ViewNote';

function App() {
	const [noteList, setNoteList] = useState([
		{
			id: 0,
			title: 'Sample note',
			content: 'This is a sample note :)',
			date: '29.07.2022',
			pinned: false
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
		saveData()
	}

	const deleteNote=(id)=>{
		const newNoteList = noteList
		newNoteList.forEach(note => {
			if(note != null && note.id === id){
				delete newNoteList[newNoteList.indexOf(note)]
			}
		});
		setNoteList([...newNoteList])
		saveData()
	}

	const updateTitle=(id, title)=>{
		const newNoteList = noteList
		newNoteList.forEach(note => {
			if(note != null && note.id === id){
				note.title = title
			}
		});
		setNoteList([...newNoteList])
		saveData()
	}

	const updateContent=(id, content)=>{
		const newNoteList = noteList
		newNoteList.forEach(note => {
			if(note != null && note.id === id){
				note.content = content
			}
		});
		setNoteList([...newNoteList])
		saveData()
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
		saveData()
	}

	const [viewOpen, setViewOpen] = useState(false)
	const [openNote, setOpenNote] = useState()

	const openViewNote=(note)=>{
		setViewOpen(true)
		setOpenNote(note)
	}

	const closeViewNote=()=>{
		setViewOpen(false)
		setOpenNote()
	}

	const saveData=()=>{
		localStorage.setItem('noteList', JSON.stringify(noteList))
	}

	const loadData=()=>{
		const newNoteList = localStorage.getItem('noteList')
		if(newNoteList !== null) setNoteList(JSON.parse(newNoteList))
	}

	useEffect(()=>{
		loadData()
	}, [])

	return (
		<div className="App">
			<Header />
			<AddNote addNote={addNote} />
			<Main noteList={noteList} pinNote={pinNote} deleteNote={deleteNote} openViewNote={openViewNote}/>
			<ViewNote updateTitle={updateTitle} updateContent={updateContent} closeViewNote={closeViewNote} viewOpen={viewOpen} openNote={openNote}/>
		</div>
	);
}

export default App;
