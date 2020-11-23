function figureArea(arr) {
    let w=Number(arr[0]);
    let h=Number(arr[1]);
    let W=Number(arr[2]);
    let H=Number(arr[3]);

    let supw=w;
    if(w>W)
        supw=W;

    let suph=h;
    if (h>H)
        suph=H;

    return W*H + w*h - supw*suph;
}

var array=['2', '4', '5', '3'];
console.log(figureArea(array));

array=['13', '2', '5', '8'];
console.log(figureArea(array));
