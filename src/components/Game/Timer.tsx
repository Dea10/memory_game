import React, { useContext, useEffect, useState } from 'react';
import { BoardContext } from './GameScreen';

let interval: any;
const Timer = () => {

    const [secs, setSecs] = useState(0);
    const [mins, setMins] = useState(0);
    const boardState = useContext(BoardContext)

    useEffect(() => {
        if(boardState.isStarted) {
            interval = setInterval(() => {
                setSecs(secs+1);
                if(secs === 59) {
                    setSecs(0);
                    setMins(mins+1);
                }
            }, 1000);
    
            return () => clearInterval(interval);
        }
    }, [secs, boardState.isStarted]);

    useEffect(() => {
        if(boardState.isFinished) {
            console.log('isFinished Timer: ', boardState.isFinished);
            clearInterval(interval);
        }
    }, [boardState.isFinished]);

    return (
        <h3>Time: {mins < 10 ? '0' + mins : mins}:{secs < 10 ? '0' + secs : secs}</h3>
    );
};

export default Timer;