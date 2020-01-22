function TOH(n, source, temp, dest) {
  if (n === 1) {
    print(source, dest);
    return;
  } else {
    TOH(n - 1, source, dest, temp);
    print(source, dest);
    TOH(n -1, temp, source, dest);
  }
  
}

function print(a, b) {
  console.log(`Moving disc from ${a} to ${b}`);
}

TOH(7, 'A', 'B', 'C'); //A>B A>C B>C 