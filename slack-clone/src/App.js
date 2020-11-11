import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat'; 
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider';

function App() {

  // const [user, setUser] = useState(null);
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {/* Header */}
        { !user ? (
          <>
          <Login />
          </>
        ) : (
          <>
          <Header />
          <div className="app__body">

          {/* Sidebar */}
          <Sidebar />
          {/* React-Router -> Chat screen */}
          <Switch>
            <Route path='/room/:roomId'>
              <Chat />
            </Route>
            <Route path='/'>
              <h1>Welcome</h1>
            </Route>
          </Switch>

        </div>
        </>
        ) }
        
      </Router>
      
      
    </div>
  )
}

export default App;
