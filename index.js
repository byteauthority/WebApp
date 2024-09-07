const express = require('express');

const app = express();

const { readFile } = require('fs');

app.use(express.static('public'));

app.get('/', (request, response) => {

    readFile('./public/index.html', 'utf8', (err, html)=> {
        if (err){
            response.status(500).send('Out Of Order')
        }

        response.send(html);

    })
});

// Include route files
const notesRoute = require('./routes/notes');
const deskRoute = require('./routes/desk');




// Use routes
app.use('/desk', deskRoute);
app.use('/notes', notesRoute);

// app.listen(process.env.PORT || 3000, () => console.log('App is running on http://localhost:3000'))
app.listen(3000, () => {
    console.log("Server is running")
})