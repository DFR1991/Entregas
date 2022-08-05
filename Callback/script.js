const gastoConIva = (num)=>{

    return console.log(`Total Iva: ${num + num *0.21}`); 
}

let nums = [100, 150, 200, 250, 300];

let MontosConIva = nums.map(gastoConIva);
