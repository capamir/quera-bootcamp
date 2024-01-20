function findPrimes(num) {
  // your code here...
  let primes = [];

  // Function to check if a number is prime
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  // Loop through numbers up to n and add primes to the list
  for (let i = 2; i <= num; i++) {
    if (isPrime(i) && num % i === 0) {
      primes.push(i);
    }
  }

  return primes;
}

let result = findPrimes(20);
console.log(result);

module.exports = findPrimes;
