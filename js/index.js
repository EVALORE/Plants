function reverse(n) {
  if (n < 0) n = n * -1
    console.log(n)
    n = n.toString();
    let res = '';
    for (let i = 0; i < n.length; i++) {
      res = n[i] + res;
    }
    return res;
}

console.log(reverse(-2342));
