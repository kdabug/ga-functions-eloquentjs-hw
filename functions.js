// your control flow code from chapter 2 of eloquent js goes here!

//MINIMUM EXERCISE

function min(arg1, arg2) {
  if (arg1 < arg2) {
    return arg1;
  } else {
    return arg2;
  }
}

//BEAN COUNTING

function countBs(string) {
  let num = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      num++;
    }
  }
  return num;
}

function countChar(string, char) {
  let num = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      num++;
    }
  }
  return num;
}
