function sumNumbers(input) {
    let index = 0;
    let mainNumber = Number(input[index]);
    index++;
    let totalSum = 0;
   
    while(totalSum < mainNumber) {
        let tempNum = Number(input[index]);
        totalSum += tempNum;
        index++;
    }
    console.log(totalSum);
}
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
sumNumbers(["100", "10", "20", "30", "40"]);


