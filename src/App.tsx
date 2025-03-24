
import { useEffect, useState } from 'react'
import './App.css'
import { Notes } from './components/Notes';
import { Note } from './Types.';
import { AppContext } from './AppContext';
import { useWindowResize } from './hooks/useWindowResize';
import { useFetch } from './hooks/useFetch';


function App() {

  const [notesArr , setNotes] = useState<Note[]>([]) ;

  const size = useWindowResize();
  const {data ,loading} = useFetch<Note[]>('https://jsonplaceholder.typicode.com/todos');

  useEffect(()=> {
      setNotes(data? data:[]);
  },[data]);

  const toggleStarNote = (noteId: number) => {
      setNotes(
        notesArr.map((noteItem)=> {

          if(noteItem.id === noteId){
              return {...noteItem, completed:!noteItem.completed}
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

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <AppContext.Provider value={{
      notes:notesArr,
      toggleStarNote,
      deleteNote,
    }}>

        {
          size.width < 300? <h3 className='text-red-500'>Resolution not supported</h3> : <Notes/>
        }
    </AppContext.Provider>
  )
}

export default App
