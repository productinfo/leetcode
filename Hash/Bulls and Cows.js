const getHint = (secret, guess) => {
  const map = {};
  let b = 0;
  let c = 0;
  for (let l = secret.length, i = 0; i < l; i++) {
    if (secret[i] === guess[i]) b++;
    if (map[secret[i]]) {
      map[secret[i]]++;
    } else {
      map[secret[i]] = 1;
    }
  }
  for (let l = guess.length, i = 0; i < l; i++) {
    if (map[guess[i]]) {
      map[guess[i]]--;
      c++;
    }
  }
  return `${b}A${c - b}B`;
};