import axios from 'axios';

export const getRanking = async () => {
    const resp = await axios.get('http://localhost:8080/api/players');
    return resp.data.players;
}