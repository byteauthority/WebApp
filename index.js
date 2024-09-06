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
const usersRoute = require('./routes/users');
const workRoute = require('./routes/work');




// Use routes
app.use('/users', usersRoute);
app.use('/work', workRoute);

// app.listen(process.env.PORT || 3000, () => console.log('App is running on http://localhost:3000'))
app.listen(3000, () => {
    console.log("Server is running")
})