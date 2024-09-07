// routes/users.js
const express = require('express');
const path = require('path');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html')); // this gets executed when user visit http://localhost:3000/work
});



// export the router module so that server.js file can use it
module.exports = router;