
import { useState } from 'react'
import './App.css'
import AutoCounter from './components/AutoCounter'
import PostsPage from './PostsPage'
function App() {
 
  // const user : {name:string; type: 'admin' | 'moderator' | 'guest'} = {
  //   name: 'riyan',
  //   type: 'admin'
  // }
    
  const [showCounter , setShowCounter] = useState(false);

  return (
    <>  
      {/* <Todos/> */}
      {/* <LoginForm/> */}
      {/* <WelcomeMessage isLoggedIn={true} user={user} */}
       {/* /> */}

       {showCounter && <AutoCounter/> }
       <button onClick={()=> setShowCounter(!showCounter)}>Toggle Counter</button>
      <PostsPage/>

    </>
  )
}

export default App
