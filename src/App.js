import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

function App() {
  const [list, setList] = useState([])
  return (
    <div className="App">
      {/* <Input list={list} setList={setList} /> */}
      <Todos/>
    </div>
  );
}

export default App;
