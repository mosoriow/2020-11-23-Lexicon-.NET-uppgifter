const _VAT=20.0;

function sumAndVAT(arr) {
    let sum=0.0;
    for(let i=0;i<arr.length;i++) {
        sum+=Number(arr[i]);
    }
    let vat=sum*_VAT/100.0;
    let total=sum+vat;

    console.log('sum = '+sum);
    console.log('VAT = '+vat);
    console.log('total = '+total);
}

var array=['1.20', '2.60', '3.50'];
sumAndVAT(array);

array=['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445'];
sumAndVAT(array);
