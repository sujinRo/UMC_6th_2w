import { useState } from 'react';
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
        <script src="./js/count.js"></script>
      </div>
      <div>
        <div class={isOpen ? 'modal' : 'closeModal'}>
          <div class="modalBox">
            <div class="text">
              <div class="modalLarge">안녕하세요</div>
              <div class="modalSmall">모달 내용은 어쩌고 저쩌고..</div>
            </div>
            <div class="btnBox">
              <button
                class="modalBtn"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
        <div class="large">안녕하세요!</div>
        <div class="small">내용내용내용</div>
        <button
          class="btn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          버튼 열기
        </button>
      </div>
    </>
  );
}

export default App;
