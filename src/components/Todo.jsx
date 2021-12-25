import React, { useState } from 'react';
import ShowTime from './ShowTime';
import classes from './main.module.css';
const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [item, setItem] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData(<ShowTime/>)
      setInputData('');
    }
  };
  const deleteItem = (id) => {
    const deletedData = item.filter((ele, ind) => {
      return id !== ind;
    });
    setItem(deletedData);
  };
  const removeAll = () => {
    setItem([]);
  };
  return (
    <div style={{ backgroundColor: '#dddd' }}>
      <h3>Todo Aplication</h3>
      <input
        type='text'
        placeholder='Write somthing...'
        style={{ padding: '5px' }}
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button style={{ marginLeft: '8px', padding: '4px' }} onClick={addItem}>
        Add List
      </button>
      <div>
        <button
          style={{
            backgroundColor: 'orange',
            border: 'none',
            marginRight: '40px',
            marginTop: '10px',
            padding: '5px',
            cursor: 'pointer',
          }}
          onClick={removeAll}>
          Clear All
        </button>
      </div>
      <div>
        {item.map((elem, i) => {
          return (
            <ul key={i} className={classes.Green}>
              <li className={classes.Text}>
                {elem}
                {/* {<ShowTime/>} */}
                <span
                  style={{
                    float: 'right',
                    marginRight: '10px',
                    color: 'white',
                    cursor: 'pointer',
                  }}
                  onClick={() => deleteItem(i)}>
                  X
                </span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
