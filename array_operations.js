let arrayOperation = (arr1, arr2) => {

    // Method-1
    let concatArray = arr1.concat(arr2);
    console.log(`Concatenated array: ${concatArray}`);


    // Method-2
    let extractArray = concatArray.slice(2,6)
    console.log(`Extracted portion: ${extractArray}`);


    // Method-3
    let num = 7
    let idx = extractArray.indexOf(num);
    if (idx === -1){
        console.log(`Number ${num} not found.`)
    }
    else
        console.log(`Index of number ${num} : ${idx}`)


    // Method-4
    let num2 = 10;
    if (arr1.includes(num2)===true)
        console.log(`Number ${num2} not present in array1.`);
    else
        console.log(`Number ${num2} is not present in array1.`);


    // Method-5
    let joinedString = extractArray.join("-")
    console.log(`Joined string: ${joinedString}`);


    // Method-6
    let rev_arr = extractArray.slice().reverse();
    console.log(`Reversed array: ${rev_arr}`);


    // Method-7
    let sm = 0
    for (let i of arr2)
        sm += i;
    console.log(`Sum of array2: ${sm}`);


    // Method-8
    arr1.sort();
    console.log(`Sorted array1: ${arr1}`);

}


let arr1 = [1,2,3,4];
let arr2 = [5,6,7];

arrayOperation(arr1,arr2)

