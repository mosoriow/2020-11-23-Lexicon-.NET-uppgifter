function count(arr) {
    total=0;
    for(let i=0;i<arr[0].length;i++) {
        if(arr[1]==arr[0][i])
            total++;
    }
    return total;
}

var array=['hello', 'l'];
console.log(count(array));

array=['panther', 'n'];
console.log(count(array));
