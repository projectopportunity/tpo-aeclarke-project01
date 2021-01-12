/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array - An array containing quotes with properties source, citation, and year.  This will be cycled through on the page with the below functions.
***/

const quotes = [
  { quote: 'First quote',
    source: 'First source',
    citation: 'First citation',
    year: 'First year'
  },
  { quote: 'Second quote',
    source: 'Second source',
    citation: 'Second citation',
    year: 'Second year'
  },
  { quote: 'Third quote',
    source: 'Third source',
    citation: 'Third citation',
    year: 'Third year'
  },
  { quote: 'Fourth quote',
    source: 'Fourth source',
    citation: 'Fourth citation',
    year: 'Fourth year'

  },
  { quote: 'Fifth quote',
    source: 'Fifth source',
    citation: 'Fifth citation',
    year: 'Fifth year'
  }
];


/***
 * `getRandomQuote` function: Expected input of quotes array
 * 1. Calculates a random number between 0 and the length of the quotes array 
 * 2. Returns a random quote
***/

function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


/***
 * `printQuote` function:
 *1. Calls the getRandomQuote function to generate a quote to show on the page
 *2. Creates the HTML string, using the properties from the quote
 *3. Displays quote on the browser page
***/
function printQuote() {
  let htmlString = '';
  let quoteOnPage = getRandomQuote(quotes);
  htmlString +=
    `
    <p class="quote">${quoteOnPage.quote}</p>
    <p class="source">${quoteOnPage.source}
    `
  
}
console.log(htmlString);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);