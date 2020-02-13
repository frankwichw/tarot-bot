// dependencies
const Twit = require('twit');
const fs = require('file-system');

// requiring tarot files
// const tarotCards = require("./tarot-cards");
const tarotCards = [];

// keys stored on heroku
// const Twitter = new Twit({
//     consumer_key:         process.env.CONSUMER_KEY,
//     consumer_secret:      process.env.CONSUMER_SECRET,
//     access_token:         process.env.ACCESS_TOKEN,
//     access_token_secret:  process.env.ACCESS_TOKEN_SECRET
// });

let numArray = [];
let tweetText = '';

function generateReading() {
    // Check every 1 hour (set in Heroku) whether anyone has @'d bot
    // If they have @'d bot
        // Generate unique 3 random numbers between 0 and 155
        while (numArray.length < 4) {
            let num = Math.floor(Math.random() * 156);
            if(numArray.indexOf(num) === -1) {
                numArray.push(num);
            }
        }
        // Get list of all files in tarot-cards directory
        fs.readdir('./tarot-cards', function(err, files) {
            console.log(files);
            this.tarotCards = files;
        });
        // Get three files from tarot-cards dir based on numArray
        // Get file names and replace dashes with spaces to form text of tweet
        // Form tweetText 
        // Send tweet with text and images attached (alt text??)
    // Else 
        // Sleep
}

generateReading();