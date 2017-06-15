// 就是上次read4()读回来的字符还没完全被取完。我们要先去buffer里面取，取不到了后才再次调用read4()函数去读字符
const solution = read4 => {
  const tmp = [];
  let index = 0;
  let count = 0;
  return (buf, n) => {
    let haveRead = 0;
    let eof = false;
    while (!eof && haveRead < n) {
      if (count === 0) {
        count = read4(tmp);
        eof = count < 4;
      }
      while (count > 0 && haveRead < n) {
        buf[haveRead++] = tmp[index++];
        count -= 1;
        index = index % 4;
      }
    }
    return haveRead;
  };
}

// 4/16/2017
const solution = read4 => {
  let count = 0; // data number read
  let tmp = []; // temp buf
  let index = 0; // position where to start reading
  return (buf, n) => {
    let eof = false;
    let total = 0;
    while (!eof && total < n) {
      if (count === 0) {
        // no remaining data in the buf
        count = read4(tmp);
        eof = count < 4;
      }
      while (count > 0 && total < n) {
        buf[total++] = tmp[index++];
        count -= 1;
        index = index % 4;
      }
    }
    return total;
  };
};

// 6/8/2017
const solution = read4 => {
  let index = 0;
  const tmp = [];
  let count = 0;
  return (buf, n) => {
    let eof = false;
    let total = 0;
    while (!eof && total < n) {
      if (count === 0) {
        count = read4(tmp);
        eof = count < 4;
      }
      while (count > 0 && total < n) {
        buf[total++] = tmp[index++];
        count--;
      }
      if (index === 4) index = 0;
    }
    return total;
  };
};