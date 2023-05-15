import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');
  const [curState, setCurState] = useState('');
  const [prevState, setPrevState] = useState('');
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

const inputNum = (e) => {
  if (curState === '.' && e.target.innerText === '.') return;
  if (curState !== '') 
  {setCurState((p) => p + e.target.innerText)} 
  
  else {setCurState(e.target.innerText)}
};

  useEffect(()=>{
    setInput(curState);
  }, [curState]);

  useEffect(()=>{
    setInput('0');
  }, []);

const resetInput =() => {
  setCurState('');
  setTotal(false);
  setInput('0');
};

const operate = (e)=>{
  setOperator(e.target.innerText)
  setTotal(false)
  if (curState === '') return;
  if (curState !== '') {
    setPrevState(curState)
    setCurState('')} return;
  if (prevState) {
equals() };
};

const equals = (e) =>{
  if(e.target.innerText === '=')
  {setTotal(true)}
  let cur;
  switch(operator) {
    case '%':
      cur = (Number(prevState)/100 *Number(curState));
      break;
    case '+' :
      cur = (Number(prevState) + Number(curState));
      break;
    case '-' :
      cur = (Number(prevState) - Number(curState));
      break;
    case '/' :
      cur = (Number(prevState) / Number(curState));
      break;
    case 'X' :
      cur = (Number(prevState) * Number(curState));
      break;
      default: ;   
  }
  setCurState(cur)
  setPrevState(curState) 
  setInput(cur)  
  // setCurState('')
  }


  return (
    <div className='container'>
      <div className="wrapper" >
      <div className="screen" >{input}</div>
      <div className="btn operator" onClick={resetInput}>AC</div>
      <div className="btn operator" onClick={operate}>%</div>
      <div className="btn operator" onClick={operate}>+/-</div>
      <div className="btn operator" onClick={operate}>/</div>
      <div className="btn" onClick={inputNum}>7</div>
      <div className="btn" onClick={inputNum}>8</div>
      <div className="btn" onClick={inputNum}>9</div>
      <div className="btn operator" onClick={operate}>X</div>
      <div className="btn" onClick={inputNum}>4</div>
      <div className="btn" onClick={inputNum}>5</div>
      <div className="btn" onClick={inputNum}>6</div>
      <div className="btn operator"onClick={operate}>-</div>
      <div className="btn" onClick={inputNum}>1</div>
      <div className="btn" onClick={inputNum}>2</div>
      <div className="btn" onClick={inputNum}>3</div>
      <div className="btn operator" onClick={operate}>+</div>
      <div className="btn" onClick={inputNum}>0</div>
      <div className="btn" onClick={inputNum}>.</div>
      <div className="btn equals" onClick={equals}>=</div>
      </div>
    </div>
  )
}

export default App
