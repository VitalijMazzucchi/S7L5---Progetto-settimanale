const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let count = 3;
let users = [
    {
        "id": 1,
        "username": "john",
        "firstName": "John",
        "lastName": "Doe",
        "gender": "Male",
        "profileURL": "img/male.png",
        "email": "john.doe@example.com"
    },
    {
        "id": 2,
        "username": "jane",
        "firstName": "Jane",
        "lastName": "Doe",
        "gender": "Female",
        "profileURL": "img/female.png",
        "email": "jane.doe@example.com"
    }
];

// GET
app.get('/api/users', (request, response) => {
    response.json(users);
})

app.get('/api/users/:id', (request, response) => {
    const id = request.params.id;
    users.forEach(ele => {
        if (ele.id === +id) {
            response.json(ele);
            return;
        }
    })
})

// POST
app.post('/api/users/', (request, response) => {
    const obj = request.body;
    console.log(obj);
    obj.id = count++;
    users.push(obj);
    response.json('Utente Aggiunto nel DB');
})

// PUT
app.put('/api/users/:id', (request, response) => {
    const id = request.params.id;
    const obj_mod = request.body;
    let obj = users.find(ele => ele.id === +id);
    obj = obj_mod;
    response.json('Utente Modificato nel DB');
})

// DELETE
app.delete('/api/users/:id', (request, response) => {
    const id = request.params.id;
    let obj;
    users.forEach(ele => {
        if (ele.id === +id) {
            obj = ele;
            return;
        }
    })
    let index = users.indexOf(obj);
    users.splice(index, 1);;
    response.json('Utente Eliminato dal DB');
})

app.listen(port, () => console.log('Server attivo sulla porta 3000'));


