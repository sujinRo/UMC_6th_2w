import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './index.css';

function App() {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const onChange = e => {
    setText(e.target.value);
  };

  const onKeyUp = e => {
    if (e.target.value.trim() !== '' && e.key === 'Enter') {
      e.preventDefault();
      addTodoList();
      e.target.value = '';
    }
  };

  const addTodoList = () => {
    setTodoList(todoList => [...todoList, { text: text, id: uuidv4() }]);
  };

  const addDoneList = (text, id) => {
    let newTodoList = [];
    setDoneList(doneList => [...doneList, { text: text, id: id }]);
    newTodoList = todoList.filter(item => item.id !== id);
    setTodoList(newTodoList);
  };

  const deleteDoneList = id => {
    let newDoneList = [];
    newDoneList = doneList.filter(item => item.id !== id);
    setDoneList(newDoneList);
  };

  return (
    <div className="box">
      <div className="title">UMC STUDY PLAN</div>
      <hr className="long" />
      <input type="text" id="text" placeholder="스터디 계획을 작성해보세요!" onChange={onChange} onKeyUp={onKeyUp} />
      <div className="planBox">
        <div className="todo">
          <div className="subTitle">해야 할 일</div>
          <hr className="mini" />
          <ul className="todoList">
            {todoList.map((item, idx) => (
              <li key={idx}>
                <div className="checkBox" onClick={() => addDoneList(item.text, item.id)}>
                  ☐
                </div>
                <div>{item.text}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="done">
          <div className="subTitle">해낸 일</div>
          <hr className="mini" />
          <ul className="doneList">
            {doneList.map((item, idx) => (
              <li key={idx}>
                <div className="doneCheckBox">
                  <div>☑</div>
                  <div>{item.text}</div>
                </div>
                <div className="delete" onClick={() => deleteDoneList(item.id)}>
                  ✕
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
