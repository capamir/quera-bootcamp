export function fetchData(): Promise<number> {
    return new Promise<number>((resolve) => {
        
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            resolve(randomNumber);
        }, 500); 
    });
}

//this function returns a random number between 1 and 10 after half a seconde.