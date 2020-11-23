function nextDay(arr) {
    let y=Number(arr[0]);
    let m=Number(arr[1])-1; // months are counted from 0 to 11
    let d=Number(arr[2]);

    let dm=new Date(y,m,d);
    dm.setDate(dm.getDate() + 1); // adds an extra day

    let oy=dm.getFullYear().toString();
    let om=(dm.getMonth()+1).toString();
    let od=dm.getDate().toString();
    
    return oy+'-'+om+'-'+od;
}

var array=['2016', '9', '30'];
console.log(nextDay(array));

array=['2020', '12', '31'];
console.log(nextDay(array));

