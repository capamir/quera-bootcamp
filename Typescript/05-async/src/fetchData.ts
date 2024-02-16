export async function fetchData(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        // Simulating an asynchronous operation with setTimeout
        setTimeout(() => {
            const randomDecision = Math.random() > 0.5;

            if (randomDecision) {
                resolve("data");
            } else {
                reject(new Error("Fetch error occurred"));
            }
        }, 500); // Delay for 500ms
    });
}


//fetchData after half a second randomly either resolves with "data" or rejects with an error