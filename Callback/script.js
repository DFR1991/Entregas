
function gastoConIva(costo){

    let monto = Number(costo);

    return console.log(`Total Iva: ${monto + monto *0.21}`); 
}

let nums = [100, 150, 200, 250];

let MontosConIva = nums.map(gastoConIva);
