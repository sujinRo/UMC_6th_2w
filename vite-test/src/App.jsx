import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onClickIncrease = () => {
    setCount(count + 1);
    console.log('increase가 클릭됨');
  };

  const onClickDecrease = () => {
    setCount(count - 1);
    console.log('decrease가 클릭됨');
  };

  const onClickModal = () => {
    setIsOpen(true);
    console.log('모달이 켜짐');
  };

  const onClickCloseModal = () => {
    setIsOpen(false);
    console.log('모달이 꺼짐');
  };

  return (
    <>
      <div className="count">
        <h2 id="number">{count}</h2>
        <button id="increase" onClick={onClickIncrease}>
          +1
        </button>
        <button id="decrease" onClick={onClickDecrease}>
          -1
        </button>
      </div>
      <div>
        {isOpen ? <Modal closeModal={onClickCloseModal} /> : <></>}
        <div className="large">안녕하세요!</div>
        <div className="small">내용내용내용</div>
        <button className="btn" onClick={onClickModal}>
          버튼 열기
        </button>
      </div>
    </>
  );
}

export default App;
