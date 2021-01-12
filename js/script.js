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
  { quote: '...',
    source: 'Trainer Red',
    citation: 'Pokemon Gold and Silver',
    year: '2000',
    tags: '#pokemon #nintendo #videogames'
  },
  { quote: 'When I swim in the sea and get wet... the ocean gets a little bit dryer.  Do I, like, owe the ocean an apology?',
    source: 'Pascal',
    citation: 'Animal Crossing: New Horizons',
    year: '2020',
    tags: '#animalcrossing #nintendo #videogames'
  },
  { quote: 'A girl knows her limits, but a wise girl knows she has none.',
    source: 'Norma Jeane Mortenson',
    citation: '',
    year: '1926-1962'
  },
  { quote: "I see now that the circumstances of one's birth are irrelevant.  It is what you do with the gift of life that determines who you are.",
    source: 'Mewtwo',
    citation: 'Pokemon: The First Movie',
    year: '1999',
    tags: '#pokemon #mewtwo #nintendo #wordstoliveby'
  },
  { quote: "If you want to live a life you've never lived, you have to do things you've never done.",
    source: 'Jen Sincero',
    citation: 'You Are A Badass',
    year: '2013',
    tags: '#selfdevelopment'
  },
  { quote: "Trust me.",
    source: 'BT-7274',
    citation: 'Titanfall 2',
    year: '2016',
    tags: '#protocol3 #whereistitanfall3 #BTcomeback'
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
  let quoteOnPage = getRandomQuote(quotes);

  let htmlString =
  `<p class="quote">${quoteOnPage.quote}</p><p class="source">${quoteOnPage.source}`

  //Check if citation is blank - if not, populate in htmlString
  if (quoteOnPage.citation) {
    htmlString += `<span class="citation">${quoteOnPage.citation}</span>`
    } 

  //Check if year is blank - if not, populate in htmlString
  if (quoteOnPage.year) {
    htmlString += `<span class="year">${quoteOnPage.year}</span>`
    } 
  
  htmlString += `</p>`
  //Push quote to page:
  return document.getElementById('quote-box').innerHTML = `${htmlString}`
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);