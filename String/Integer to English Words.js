const numberToWords = num => {
  if (!num) return 'Zero';
  const belowTen = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
  ];
  const belowTwenty = [
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const belowHundred = [
    "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];
  const create = n => {
    let result = '';
    if (n < 10) result = belowTen[n];
    else if (n < 20) result = belowTwenty[n - 10];
    else if (n < 100) result = `${belowHundred[(n / 10) >> 0]} ${create(n % 10)}`;
    else if (n < 1000) result = `${create((n / 100) >> 0)} Hundred ${create(n % 100)}`;
    else if (n < 1000000) result = `${create((n / 1000) >> 0)} Thousand ${create(n % 1000)}`;
    else if (n < 1000000000) result = `${create((n / 1000000) >> 0)} Million ${create(n % 1000000)}`;
    else result = `${create((n / 1000000000) >> 0)} Billion ${create(n % 1000000000)}`;
    return result.trim();
  };
  return create(num);
};

// 4/14/2017
const numberToWords = num => {
  if (!num) return 'Zero';
  const belowTen = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
  ];
  const belowTwenty = [
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const belowHundred = [
    "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  const go = n => {
    let res = '';
    if (n < 10) res = belowTen[n];
    else if (n < 20) res = belowTwenty[n % 10];
    else if (n < 100) res = `${belowHundred[(n / 10) >> 0]} ${belowTen[n % 10]}`;
    else if (n < 1000) res = `${go((n / 100) >> 0)} Hundred ${go(n % 100)}`;
    else if (n < 1000000) res = `${go((n / 1000) >> 0)} Thousand ${go(n % 1000)}`;
    else if (n < 1000000000) res = `${go((n / 1000000) >> 0)} Million ${go(n % 1000000)}`;
    else res = `${go((n / 1000000000) >> 0)} Billion ${go(n % 1000000000)}`;
    return res.trim();
  };
  return go(num);
};