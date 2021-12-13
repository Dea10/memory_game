import axios from 'axios';

export const getRanking = async () => {
    const resp = await axios.get('https://memory-game01.herokuapp.com/api/players');
    return resp.data.players;
}