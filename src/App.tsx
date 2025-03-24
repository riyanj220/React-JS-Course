
import { useState } from 'react'
import './App.css'
import { Notes } from './components/Notes';
import { Note } from './Types.';
import { AppContext } from './AppContext';


function App() {

  const [notesArr , setNotes] = useState<Note[]>([
    {
      text: 'note 1',
      id: 1,
      starred: true
    },
    
    {
      text: 'note 2',
      id: 2,
      starred: false
    },
    {
      text: 'note 3',
      id: 3,
      starred: false
    },
    {
      text: 'note 4',
      id: 4,
      starred : false
    },

    {
      text: 'note 5',
      id: 5,
      starred : false
    },

    {
      text: 'note 6',
      id: 6,
      starred : false
    },
  ]) ;


  const toggleStarNote = (noteId: number) => {
      setNotes(
        notesArr.map((noteItem)=> {

          if(noteItem.id === noteId){
              return {...noteItem, starred:!noteItem.starred}
            }

            return noteItem;
        })
      )
  }

  const deleteNote = (noteId:number) => {
     setNotes(
       notesArr.filter((noteItem)=> noteItem.id!== noteId)
     )
  }


  return (
    <AppContext.Provider value={{
      notes:notesArr,
      toggleStarNote,
      deleteNote,
    }}>

        <Notes/>
    </AppContext.Provider>
  )
}

export default App
