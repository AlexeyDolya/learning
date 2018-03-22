export function evenNum(i, a) {
  let arr = [];
  for (i = 0; i < a; i++) {
    if (i % 2 !== 0) continue;
    {
      arr.push(i);
    }
  }
  return arr;
}
evenNum(0, 10);
