export const getRandomArray = (limit: number = 10, apiLimit: number = 151, includeZero: boolean = false) => {
    const zero = includeZero ? 0 : 1;
    const arr: number[] = [];
    
    while(arr.length !== limit) {
        const newElement = Math.floor(Math.random() * (apiLimit) + zero);
        if(!arr.includes(newElement)) {
            arr.push(newElement);
        }        
    }

    return arr;
};
