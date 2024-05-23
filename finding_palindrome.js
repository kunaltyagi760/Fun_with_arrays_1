let find_palindrome = (arr) =>{
    let ans = [];

    for (let str of arr){
        let rev_str = str.slice().split("").reverse();
        rev_str = rev_str.join("");
        if (rev_str === str)
            ans.push(str); 
    }
    return ans
} 


let arr = ["radar", "hello", "madam", "world", "level"];

console.log(...find_palindrome(arr));
