import React from 'react';

const RankingScreen = () => {

    const arr = [1,2,3,4,5];
    const mockData = arr.map(item => ({
        nickname: `player0${item}`,
        time: Math.floor(Math.random() * 10)
    }));

    return (
        <div>
            <h3>Ranking Screen</h3>
            {
                mockData.sort((a, b) => (a.time-b.time)).map((player, idx) => {
                    return(
                        <div>
                            {/* TODO DEA: Create a player card component */}
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