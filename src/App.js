import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import InitialScreen from './pages/InitialScreen';
import UserPage from './pages/UserPage';

function App() {
  const [user, setUser] = useState(null)


  const enableUser = (userData) => {
    setUser(userData)
  }
  console.log(user);
  if(user) {
    return (
      <div> 
        <SearchBar setUserData={enableUser}/>
        <UserPage userData = {user}/>
      </div>
    )
  }   else {
  return(
    <div>
      <SearchBar setUserData={enableUser}/>
      <InitialScreen/>
    </div>
  )  

  }
 
}

export default App;
