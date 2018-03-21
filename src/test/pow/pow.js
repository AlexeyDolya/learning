export function pow(x, n) {
  let res = x;
  for (let i = 0; i < n; i++) {
    res = res * x;
  }
  return res;
}
pow(2, 5);

