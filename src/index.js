import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const Square=(props) =>{
  return (
    <button className='square' onClick={props.onClickEvent}>
    {props.value}
    </button>
  )
}
function calculateWinner(squares){
  const lines=[
    [0,1,2], [3,4,5], [6,7,8]
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for(let line of lines){
    const [a,b,c] = line;
    if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
      return squares[a];
    }
  }
  return null;
}

const Board=()=>{
  const initialSquares=[
    null,null,null,
    null,null,null,
    null,null,null,
  ];
  const[squares,setSquares]=useState(initialSquares);
  const[xisNext,setXisNext]=useState(true);
  const winner=calculateWinner(squares);
  const handleClickEvent=(i)=>{
    const newSquares=[...squares];
    if(newSquares[i]==null){
    newSquares[i]= xisNext ?'X':'O' ;
    setSquares(newSquares);
    setXisNext(!xisNext);}
  }

  const renderSquare=(i)=>{
    return(
      <Square value={squares[i]} 
      onClickEvent={()=>handleClickEvent(i)} />
    )
  }
  
  return (
      <div className='board' style={{backgroundColor :'salmon',
      margin:10,
      padding:20,}}>
        Board
        <div className='board-row'>
          {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
        </div>
      </div>
  )

}
const gameStyles={
  backgroundColor :'blue',
  margin:10,
  padding:20,
}
const Game = () =>{
  return(
    <div className='game'>
        TicTacToe
        <Board/>
    </div>
  );
}


ReactDOM.render(
  <Game/>,
  document.getElementById('root')
)

