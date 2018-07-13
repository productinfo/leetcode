const c = 'c_user=1846219909; presence=EDvF3EtimeF1494439596EuserFA21846219909A2EstateFDutF1494439596981CEchFDp_5f1846219909F2CC; act=1494439601080%2F6';
const splitStr = op => str => str.split(op);
const semi = splitStr(';');
const eq = splitStr('=');
const combine = (res, arr) => {
  const [k, v] = arr;
  res[k] = v;
  return res;
};
const m = cookie => semi(cookie).map(eq).reduce(combine, {});