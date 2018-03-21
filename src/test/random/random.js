export function randomInteger(min, max) {
  let rand = Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}
randomInteger(2, 10);
