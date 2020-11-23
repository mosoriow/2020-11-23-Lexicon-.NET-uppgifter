function stringOfNumbers(arr) {
    let n=Number(arr[0]);
    let result="";

    for(let i=1;i<=n;i++)
        result=result+i.toString();
    
    return result;
}

var array=['11'];
console.log(stringOfNumbers(array));

var array=['15'];
console.log(stringOfNumbers(array));
