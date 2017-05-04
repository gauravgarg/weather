var express = require('express');

express().use(express.static('www')).listen(3000, function() {
    console.log('Dev server started on http://localhost:3000/');
});
