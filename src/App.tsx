import './App.css';
import React from 'react';
import Home from './components/Pages/Home';
import BookState from './components/molecules/Tabs';
import ExpandNav from './components/molecules/Expandnav/ExpandNav';
// import BookCard from './components/molecules/BookCard';
// import img from './img.png';


function App() {
  return (
    <div className="App">
      <Home/>
      {/* <BookState/> */}
    
    </div>
  );
}

export default App;
/* <BookCard img={img} title='The Lean Startup' author='Eric Ries' time='13-minute read'/> */