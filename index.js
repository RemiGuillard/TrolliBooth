// Setting up
var express = require('express');
var app = express();

// Configuration
app.set('port', (process.env.PORT || 8500))
app.use(express.static(__dirname + '/app'));


// Routes
// API
app.get('/api/trollibooth', function(request, result) {

    // We try to connect to the instagram API
    var requestLib = require('request');

    requestLib('http://trollilol.ovh/test.json', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            result.json(body);
        } else { // Else we display an error
            console.log(error);
            result.json(error);
        }
    });
    // If we get the authentication token, we can request the feed
    // BLABLA, REQUEST FEED
    
});

// Routes
// APPLICATION
app.get('*', function(request, result) {
    result.sendFile(__dirname + '/app/index.html'); // Here we load the angular view
});

// Port listening
app.listen(app.get('port'), function() {
    console.log("Booth app is running at localhost:" + app.get('port'))
})

