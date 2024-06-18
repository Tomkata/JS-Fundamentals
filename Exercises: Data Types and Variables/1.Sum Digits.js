function Sum(digit) {
    let numStr = digit.toString();
    let sum = 0;
    
    for (let index = 0; index < numStr.length; index++) {
        sum += Number(numStr[index]);
    }
    console.log(sum);
}
