function evenPowersOf2(input) {
  let N = input[0];

  for (let i = 0; i <= N; i++) {
    i = Number(i);
    if (i % 2 === 0) {
      console.log(Math.pow(2, i));
    }
  }
}
evenPowersOf2(["6"]);