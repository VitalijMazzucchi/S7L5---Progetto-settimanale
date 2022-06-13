// per questioni di tempo non ho avuto modo di inserire la parte grafica del css/scss
let utenti = 'http://localhost:3000/api/users/';

document.addEventListener('DOMContentLoaded', function () {
    stamp();
})

function stamp() {
    container.innerHTML = '';
    fetch(utenti).then(res => res.json()).then(json => {
        let container = document.querySelector('#container');
        json.forEach(ele => {
            let div = document.createElement('div');
            container.appendChild(div);
            let img = document.createElement('img');
            img.src = ele.profileURL;
            div.appendChild(img);
            let h2 = document.createElement('h2');
            h2.innerText = ele.username;
            div.appendChild(h2);
            let moreinfo = document.createElement('div')
            moreinfo.className = 'moreinfo' + ele.id;
            div.appendChild(moreinfo)
            let btcontainer = document.createElement('div');
            div.appendChild(btcontainer);
            btcontainer.innerHTML = `<button onclick="del(${ele.id})">Delete</button>
                                    <button onclick="moreInfo(${ele.id})">More info</button>`;
        });
    })
}
function moreInfo(id) {
    let moreinfo = document.querySelector('.moreinfo' + id);
    let divinfo = document.createElement('div');
    divinfo.className = 'pienoVuoto' + id;
    let pienoVuoto = document.querySelectorAll('.pienoVuoto' + id)
    console.log(pienoVuoto)
    if (pienoVuoto.length >= 1) {
        delinfo(id)
    } else if (pienoVuoto.length == 0) {
        moreinfo.appendChild(divinfo);
        fetch(utenti + id)
            .then(res => res.json())
            .then(json => {
                divinfo.innerHTML = `  <h3>${json.firstName + ' ' + json.lastName}</3>                               
                                <h3>${json.gender}</h3>
                                <a href="mailto:${json.email}">${json.email}</a>`;
            })

    }


}

function delinfo(id) {
    let x = document.querySelector('.pienoVuoto' + id)
    x.remove()
}

function del(id) {
    fetch(utenti + id, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => { stamp() })
}

document.querySelector('form button').addEventListener('click', function add() {

    let obj = {
        id: '',
        username: document.querySelector('input:first-child').value,
        firstName: document.querySelector('input:nth-child(2)').value,
        lastName: document.querySelector('input:nth-child(3)').value,
        gender: document.querySelector('input:nth-child(4)').value,
        email: document.querySelector('input:nth-child(5)').value,
        profileURL: "img/utente.png"
    }
    console.log(obj);
    fetch(utenti, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(json => {
            stamp()
        })

})











