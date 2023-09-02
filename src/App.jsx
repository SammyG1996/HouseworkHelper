import './App.css';
import { createContext, useEffect, useState } from 'react';
import {ComplexNavbar} from './components/Nav';
import { Home } from './components/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from './components/About';




export const IsLoggedInContext = createContext()

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [alert, setAlert] = useState(null);

  const updatedIsLoggedIn = () => {
    setIsLoggedIn(bool => !bool);
  }
  const updateToken = (val) => {
    setToken(val);
  }
  const updateAlert = (val) => {
    setAlert(val)
  }
  const updateUsername = (val) => {
    setUsername(val)
  }

  return (
    <div className="App h-[100%] bg-[#f0f0f0]">
        <IsLoggedInContext.Provider value={{isLoggedIn}}>
          <ComplexNavbar />
          <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/learn-more'} element={<About />} />
          </Routes>
          

        </IsLoggedInContext.Provider>
    </div>
  );
}

export default App;
