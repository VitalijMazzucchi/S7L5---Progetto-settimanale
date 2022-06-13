let utenti = '../users.json';

fetch(utenti).then(res => res.json()).then(json => {
    let container = document.querySelector('#container');
    json.forEach(ele => {
        let div = document.createElement('div');
        container.appendChild(div);

        //soluzione 1
        let img = document.createElement('img');
        img.src = ele.profileURL;
        div.appendChild(img);
        let h3 = document.createElement('h3');
        h3.innerText = 'Nickname:' + ' ' + ele.username;
        div.appendChild(h3);
        let h3_2 = document.createElement('h3');
        h3_2.innerText = 'Nome e cognome:' + ' ' + ele.firstName + ' ' + ele.lastName;
        div.appendChild(h3_2);
        let h3_3 = document.createElement('h3');
        h3_3.innerText = 'Genere:' + ' ' + ele.gender;
        div.appendChild(h3_3);
        let mail = document.createElement('a');
        mail.href = 'mailto:' + ele.email;
        mail.innerText = ele.email;
        div.appendChild(mail)


        // soluzione 2
        /*  div.innerHTML = `<img src="${ele.profileURL}" alt="fotoUtente">
                          <h3>Nickname: ${ele.username}</h3>
                         <h3>Nome e cognome: ${ele.firstName + ' ' + ele.lastName}</3>
                         <h3>Genere: ${ele.gender}</h3>
                         <a href="mailto:${ele.email}">${ele.email}</a>`; */

    });
})




