import React from 'react';
import './App.css';


import SideMenu from './components/Home_Side_Menu/index.js'
import MainSection from './views/user/Home/index.js'

function App() {
  return (
    <div className="App">
      <SideMenu />
      <MainSection />
    
    </div>
  );
}

export default App;
