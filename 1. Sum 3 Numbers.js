function sum3Numbers(arr) {
    let sum=0;
    for(let i=0;i<3;i++) {
        //sum+=Number(arr[i]); // convert a string into a float
        sum+=parseInt(arr[i]); // convert a string into integer
    }
    return sum;
}

var array=['2', '3', '4'];
console.log(sum3Numbers(array));

array=['1.5', '1.5', '-1'];
console.log(sum3Numbers(array));
