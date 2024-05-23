let calculateOddSum = (arr) =>{
    let sm = 0
    for (let x of arr){
        if (x%2===1){
            sm += x;
        }
    }
    return `Sum of odd numbers: ${sm}`
}

let containsPrime = (arr) =>{
    for (let x of arr){
        let count = 0
        for (let i=2; i<Math.floor(Math.sqrt(x))+1; i++){
            if (x%i === 0){
                count += 1;
            }
        }
        if (count === 0){
            return true
        }
    }
    return false;
}

let prime_arr = (arr) => {
    let ans = [];
    for (let x of arr){
        let count = 0
        for (let i=2; i<Math.floor(Math.sqrt(x))+1; i++){
            if (x%i === 0){
                count += 1;
            }
        }
        if (count === 0){
            ans.push(x)
        }
    }
    return ans;
}

let avg = (arr) => {
    let average = arr.reduce(function (avg, value, _, { length }) {
        return avg + value / length;
    }, 0);

    return average;
}

let numbers = [3, 8, 5, 12, 7, 14, 11];

console.log(calculateOddSum(numbers));
console.log(`Contains prime numbers: ${containsPrime(numbers)}`);
console.log(`Prime numbers: ${prime_arr(numbers)}`);
console.log(`Average of numbers: ${Math.floor(avg(numbers))}`)
console.log(`Maximum number: ${Math.max(...numbers)}`);
console.log(`Minimum number: ${Math.min(...numbers)}`);
console.log(`Sorted array: ${numbers.sort((a, b) => a - b)}`);
console.log(`Reversed array: ${numbers.sort((a, b) => b - a)}`);
