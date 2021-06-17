import React from 'react';

const RankingScreen = () => {
    
    const arr = [1,2,3,4,5];
    const mockData = arr.map(item => ({
        nickname: `player0${item}`,
        time: Math.floor(Math.random() * 10)
    }));

    const ranking = JSON.parse(localStorage.getItem('ranking') || '[]');

    return (
        <div>
            <h3>Ranking Screen</h3>
            {
                ranking.sort((a: { time: number; }, b: { time: number; }) => (a.time-b.time)).map((player: { nickname: string; time: number; }, idx: number) => {
                    return(
                        <div>
                            {/* TODO: Create a player card component */}
                            <h3>{`${idx+1} - ${player.nickname}`}</h3>
                            <p>{`Time: ${player.time}`}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default RankingScreen;