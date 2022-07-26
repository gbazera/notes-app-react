import { useState } from 'react';
import Main from './components/Main'

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
	])

	const pinNote=(id)=>{
		const newNoteList = noteList;
		newNoteList.map((note)=>{
			if(note.id == id){
				note.pinned = !note.pinned
			}
		})
		setNoteList(newNoteList)
	}

	return (
		<div className="App">
			<Main noteList={noteList} pinNote={pinNote}/>
		</div>
	);
}

export default App;
