import React from 'react';
import './App.css';
import Fakeapi from './components/Fakeapi';
import Title from './components/Title';


function App() {
  return (
    <div className="App">
      <div className='app-title'>
          <Title />
      </div>
      <div className='app-details'>
          <Fakeapi/>
      </div>
    </div>
  );
}

export default App;
