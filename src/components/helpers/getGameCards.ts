import { getRandomArray } from "./getRandomArray";

export const getGameCards = () => {
    const randomSprites = getRandomArray();
    const duplicatedRandomSprites = [...randomSprites, ...randomSprites];
    const positionsArray = getRandomArray(duplicatedRandomSprites.length, duplicatedRandomSprites.length, true);

    const gameArray = [...duplicatedRandomSprites];
    for (let i = 0; i < duplicatedRandomSprites.length; i++) {
        gameArray[i] = duplicatedRandomSprites[positionsArray[i]];
    }

    const gameCards = gameArray.map(item => {
        return {
            id: item,
            isShown: false,
            isPaired: false
        }
    });

    return gameCards;
}