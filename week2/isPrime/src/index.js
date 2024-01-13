function isPrime(num) {
  // TODO...
  if (isNaN(num) || !isFinite(num) || num <= 1) return false;
  if (num % 2 == 0) return num == 2;
  var m = Math.sqrt(num);
  for (var i = 3; i <= m; i += 2) {
    if (num % i == 0) return false;
  }
  return true;
}

module.exports = isPrime;
