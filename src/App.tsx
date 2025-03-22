
import './App.css'
import { WelcomeMessage } from './components/WelcomeMsg'
function App() {
 
  const user : {name:string; type: 'admin' | 'moderator' | 'guest'} = {
    name: 'riyan',
    type: 'admin'
  }
    

  return (
    <>  
      {/* <Todos/> */}
      {/* <LoginForm/> */}
      <WelcomeMessage isLoggedIn={true} user={user}
       />


    </>
  )
}

export default App
