import React, {createContext} from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import {FamAdmin} from './Pages/FamAdmin'
import {FamList} from './Pages/FamList'
import {Home} from './Pages/Home'
import {Navigation} from './components/navigation'
import {Login} from './components/login'

export const UserContext = createContext(null)

export const App =()=> {
  // const [UserContext, setUserContext] = useState('')
  return (
    <div className="App">
      {/* {
      user.isLogged===false
      ?<Navigation/>
      :<Login/>
      } */}
    <UserContext.Provider value="xd">
      <Login/>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/FamList" component={FamList}/>
          <Route exact path="/FamAdmin" component={FamAdmin}/>
          <Route  path="*" component={()=><p>404 not found</p>} />
      </Switch>
    </UserContext.Provider>
    </div>
  );
}

