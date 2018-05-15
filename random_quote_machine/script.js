/**
* @Author: GSoster - Guilherme Soster Santos
*
*/

// Setup the quotes array
let endpoint = 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
let quotes = [];
fetch(endpoint)
  .then(function(response) {
    return response.json();
  })
  .then(function(responseAsJson) {
  quotes.push(...responseAsJson.quotes);
  });


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


// loads a new random quote each time AND remove a used one from the array
function getNewQuote(quotesArray)
{
  let index = getRandomInt(quotesArray.length);
  let quote = quotesArray[index];
  quotesArray.splice(index, 1);// removes quote from array
  return quote;
}

// display on screen a new quote
function displayNewQuote(quote)
{
  document.querySelector('#theAuthor').innerText = quote.author;
  document.querySelector('#theQuote').innerText = quote.quote;    
}


document.querySelector('#btnNewQuote').addEventListener('click', () => displayNewQuote(getNewQuote(quotes)));

//Start application
//display first quote
setTimeout(() => {displayNewQuote(getNewQuote(quotes))}, 1000);
//setTimeout(() => {displayNewQuote(quotes[0])}, 1000);
//setTimeout(() => {console.log(quotes[0])}, 1000);