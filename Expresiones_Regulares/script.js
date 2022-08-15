const pass = document.querySelector('#password');
const pattern = /^(?![\s])(?=.*\d)(?=\w)(?=.*[a-zA-Z]).\S{11,19}$/;

document.querySelector('#submit').addEventListener('click', (e)=> {
    e.preventDefault();
    let password = pass.value;
    password.match(pattern) ? console.log('Password válido') :  console.log('Password inválido');
});