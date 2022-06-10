let n = 0, 
    p = 0, 
    neg = 0, 
    z = 0;

//let num = [];
let arr = [1,-2,0,3,-9,4,5,-6];
//let arr2 = [1, 2, 3, 4];
function plusMinus(arr){
    
    let len = arr.length;
    while(n <= len){
        check();
        n++;
    }
    
}

function check(){
    let len = arr.length;
    if (arr[n] > 0){
        p++;
    }else if (arr[n] < 0){
        neg++;
    }else if (arr[n] == 0){
        z++;
    }else if (n == len){
        console.log((p / len).toFixed(6));
        console.log((neg / len).toFixed(6));
        console.log((z / len).toFixed(6));
    }else{
        return "What are you doing?";
    }
}
plusMinus(arr);

let randomArray = [3, 19, 30, 23, -1];
let sortedArray = randomArray.sort((a, b) => a-b);
console.log(sortedArray);
//to not use a function. you can only use a loop and ifs
