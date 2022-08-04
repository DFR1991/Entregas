
function gastoConIva(costo){

    let monto = Number(costo);

    return console.log(`Monto Iva: ${monto + monto *0.21}`); 
}


function map(arrNum, callback) {
    let array_result = [];

    for (let i = 0; i < arrNum.length; i++) {

        array_result.push(callback(Number(arrNum[i])));
    }

    return array_result;
}

let nums = [100, 150, 200, 250];

let MontosConIva = map(nums, gastoConIva);