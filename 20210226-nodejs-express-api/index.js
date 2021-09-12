// Esta es otra manera de crear modulos diferentes. Command.js. 
// Modulos de node.js anteriores a los EMACS modules (import blabla from './url')
// Se pueden usar EMACS imports pero por ahora usemosolo asi porque en la docu estan asi
// Este es el modulo nativo de node para realizar cosas por el protocolo http (por ej, crear un server)
// const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./loggerMiddleware');

// Con esto decis que la app tiene que usar este modulo que esta en express.json().
// De esta manera ya lo estas habilitando. Lo que le estas diciendo es que si una request viene como JSON, la tenes que soportar y parsear
app.use(express.json());
app.use(cors());

app.use(logger);

let notes = [
  {
    'id': 1,
    'content': 'Me tengo que suscribir a @midudev en YouTube y en Twitch',
    'date': '2019-05-30T17:30:31.098Z',
    'important': true
  },
  {
    'id': 2,
    'content': 'Tengo que estudiar las clases del FullStack Bootcamp',
    'date': '2019-05-30T18:39:31.098Z',
    'important': true
  },
  {
    'id': 3,
    'content': 'Repasar los retos de JS de midudev',
    'date': '2019-05-30T19:20:31.098Z',
    'important': true
  },
];

// Creamos un server con createServer y le pasamos un callback. 
// En este caso el callback es una funcion que se va a ejecutar cada vez que se haga un request
// const app = http.createServer((request, response) => { // 1 param: info de la request | 2 param: objeto response con diferentes metodos para que devuelvas la info que quieras
//     //response.writeHead(200, {'Content-type': 'text/plain'}); // Escrite en el head del paquete del protocolo http una response 200.
//     // response.end('Ola k ase'); // Para terminar la respuesta devolvemos Ola ke ase
//     response.writeHead(200, {'Content-type': 'application/json'}); // Escrite en el head del paquete del protocolo http una response 200.
//     response.end(JSON.stringify(notes)); 
// });

// Reemplazamos lo comentado mas arriba por las responses de express
app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>');
});

app.get('/api/notes', (request, response) => {
  response.json(notes);
});

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find(note => note.id === id);

  if(note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
    
});

app.post('/api/notes/', (request, response) => {
  const note = request.body;

  if(!note || !note.content) {
    return response.status(400).json({
      error: 'note.content is missing'
    });
  }

  const ids = notes.map(note => note.id);
  const maxId = Math.max(...ids);

  const newNote = {
    id: maxId + 1,
    content: note.content,
    important: typeof note.important !== 'undefined' ? note.important : false,
    date: new Date().toISOString()
  };

  notes = [...notes, newNote];

  response.status(201).json(newNote);
});

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id);
    
  response.status(204).end();
});

app.use((request, response) => {
  response.status(404).json({
    error: 'not found',
  });
});

const PORT = 3001;
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});

