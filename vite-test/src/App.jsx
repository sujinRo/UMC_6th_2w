import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const onClickIncrease = () => {
    setCount(count + 1);
    console.log('increase가 클릭됨');
  };

  const onClickDecrease = () => {
    setCount(count - 1);
    console.log('decrease가 클릭됨');
  };

  return (
    <>
      <div>
        <h2 id="number">{count}</h2>
        <button id="increase" onClick={onClickIncrease}>
          +1
        </button>
        <button id="decrease" onClick={onClickDecrease}>
          -1
        </button>
        <script src="./js/count.js"></script>
      </div>
    </>
  );
}

export default App;
