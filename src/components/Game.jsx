import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

import './Game.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        // Opredelit bil li klick po yacheike ili igra zakonchena
        if (winner || boardCopy[index])  return null
        // Opredelit chei hod X > 0
        boardCopy[index] = xIsNext ? 'X' : 'O'
        // Obnovit state
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
        )
    }


    return (
        <div className="wrapper">
            { startNewGame() }
            <Board squares={board} click={handleClick} />
            <p className='game_info'>
                { winner ? 'Победитель ' + winner : 'Сейчас ходит ' + ( xIsNext ? 'X' : 'O' ) }
            </p>
        </div>
    );
}

export default Game;
