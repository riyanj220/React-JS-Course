
import { useEffect, useState } from 'react';
import './App.css'
import {UseEffectLesson } from './components/UseEffectLesson'
import { getTodos } from './api/todos/todos-api';
import { Todo } from './Types.';
function App() {
 
  // const user : {name:string; type: 'admin' | 'moderator' | 'guest'} = {
  //   name: 'riyan',
  //   type: 'admin'
  // }
    
  // const [showCounter , setShowCounter] = useState(false);


  // USe Effect lesson
  const [todos, setTodos] = useState<Todo[]>([]);
  const [finishedCount, setFinishedCount] = useState(0);


  useEffect(() => { 
      console.log('App mounted');
      getTodos().then((todosFromServer) => {
          console.log({todosFromServer});
          setTodos(todosFromServer);

          setTimeout(() => {

            setTodos((todoArray) => {
              return todoArray.map((item , index) => {
                if(index === 0) {
                  return {
                    ...item,
                    completed: true
                  }
                }
                return item;
              });
            });

          },2000);
      })
  },[]);


  useEffect(() => {
    const count = todos.filter(todo => todo.completed).length;
    setFinishedCount(count); 
    },[todos])


  return (
    <>  

      <p className='text-2xl'>
        Finished Todos  = <span> {finishedCount}</span>
      </p>
      {/* <Practice/> */}
      <UseEffectLesson todoArray={todos}/>

    </>
  )
}

export default App
