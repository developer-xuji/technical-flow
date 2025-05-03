import React from 'react';
import TimeLine from './components/TimeLine';
import MainPage from './pages/MainPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='ControlBar' style={{position:'fixed'}}></div>
      <div><TimeLine shift='day' /></div>
      <MainPage />
    </div>
  );
}

export default App;
