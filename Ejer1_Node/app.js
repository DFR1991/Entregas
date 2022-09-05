/*
 *  Metodos de consulta
 *  Sort: ordena de mayor a menor
 *  /users?_sort=id&_order=desc
 *   
 *  Filter: Filtra segun el parametro y valor indicado
 *  /users?first_name=Diego
 *  
 *  Paginate: Muestra la pagina x con 5 usuarios en cada pagina
 *  /users?_page=1&_limit=5
 *  
 *  Slice: Inidica el inicio del registro que queremos mostrar con _start y el limite con _end o _limit
 *  /users?_start=20&_end=30
 *  
 * 
 * Operadores
 *  Range: Para establecer un rango gt(mayor que),gte(mayor o igual),lt(menor que),lte(menor o igual) 
 *  /users?id_gte=10&id_lte=20
 * 
 * Exclude: Excluye el valor especificado
 * /users?id_ne=5
 * 
 * 
 * Like: Filtra coincidencias que contengan el parametro especificado con el campo
 * /users?country_like=Japan
 * 
 * q: Filtra coincidencias que contengan el parametro en cualquier campo
 * /users?q=China
 * */