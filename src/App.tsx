import React, {useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState<number | string>(5)

  const changeNumber = () => {
    setNumber("2")
  }

  return (
    <div className="App">
      {number}
      <button onClick={changeNumber}>Change Number</button>
    </div>
  );
}

export default App;
