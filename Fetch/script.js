(()=>{

    let $users = document.querySelector('#users')
    $fragment = document.createDocumentFragment();
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            return res.ok ? res.json() : Promise.reject(res);
        })
        .then(json=>{
            json.forEach(e => {
                const $tr = document.createElement('tr');
                $tr.innerHTML+= `
                                        <td>${e.id}</td>
                                        <td>${e.name}</td>
                                        <td>${e.username}</td>
                                        <td>${e.email}</td>
                                        <td>${e.address.street}</td>
                                    ` ;
                $fragment.appendChild($tr);
            });
            $users.appendChild($fragment);
        })
        .catch((error) =>{
            console.log(error.status)
        })
})();