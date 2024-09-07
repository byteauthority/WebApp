// routes/users.js
const express = require('express');
const path = require('path');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/desk.html')); // this gets executed when user visit http://localhost:3000/work
});

// router.get('/table', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/table.html'));// this gets executed when user visit http://localhost:3000/work/table
// });

// router.get('/tasks', (req, res) => {
//     res.send('this is user 102 route');// this gets executed when user visit http://localhost:3000/work/tasks
// });

// export the router module so that server.js file can use it
module.exports = router;