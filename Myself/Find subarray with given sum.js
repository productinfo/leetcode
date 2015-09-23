var subArraySum = function (num, sum) {

  var r = [];

  if (!num || !sum) return r;

  var len = num.length;

  if (len === 0) return r;

  var sub = num[0], i = 1, index = 0;

  for (; i < len ; i++) {

    while (sub > sum && index < i) {
      sub -= num[index++;]
    }

    if (sub === sum) return num.slice(index, i);

    sub += num[i];

  }

  return [];
};
