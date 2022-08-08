const gastoConIva = (num)=>`Total +Iva: ${num + num *0.21}`;

const map = (arrNum, Callback)=>{
    let arrMontos = [];
    for (let i = 0; i < arrNum.length; i++) {
        arrMontos.push(Callback(arrNum[i]));
    }
    return arrMontos;
}

let nums = [100, 150, 200, 250, 300];
let MontosConIva = map(nums, gastoConIva);


console.log(MontosConIva);