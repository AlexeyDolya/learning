export function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return console.log('Родители разрешили?');
}
checkAge(19);
