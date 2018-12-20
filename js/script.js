/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//Quote array. When called, will print one randomly selected quote to the page.

var quotes = [
   {
    quote: "Some people can read War and Peace and come away thinking it's a simple adventure story. Others can read the ingredients on a chewing gum wrapper and unlock the secrets of the universe.",
    source: "Lex Luthor\, Superman\, 1978"
   },
   {
    quote: "With great power, comes great responsibility.",
    source: "Ben Parker\, Spider-Man\, 2002"
   },
   {
    quote: "I believe there's a hero in all of us that keeps us honest, noble and finally allows us to die with pride. Even though sometimes we have to be steady and give up the things we want the most. Even our dreams.",
    source: "May Parker\, Spider-Man 2\, 2004"
   },
   {
    quote: "Do not pity the dead, Harry. Pity the living and above all, those who live without love.",
    source: "Albus Dumbledore\, Harry Potter and the Deathly Hallows\, 2007"
   },
   {
    quote: "It is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it.",
    source: "Albus Dumbledore\, Harry Potter and the Deathly Hallows\, 2007"
   },
   {
    quote: "Only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt\, First Inaugural Address\, 1932"
   },
   {
    quote: "Cut off a wolf's head and it still has the power to bite.",
    source; "Lady Eboshi\, Princess Mononoke\, 1999"
   },
   {
    quote: "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are.",
    source: "Mewtwo\, Pokemon: The First Movie\, 1999"
   },
   {
    quote: "I'm not crazy about reality, but it's still the only place to get a decent meal.",
    source: 'Julius "Groucho" Marx'
   },
   {
    quote: "Smile, because it confuses people. Smile, because it's easier than explaining what is killing you inside.",
    source: "The Joker (Heath Ledger)"\, "The Dark Knight"\, "2008"
   }
]

//Color array. When called, will randomly select and display a following color as the background.

var colors = [
   'Red',
   'Green',
   'Blue',
   'Indigo',
   'Voilet',
   'Pink'
]

//Random Color function. Calls a random color from the color array.

function getRandomColor(array) {
   randomColor = Math.floor(Math.random() * colors.length);
   return colors[randomColor];
}

//Background Color function. Retrieves information from the Random Color function, then displays that information on the page.

function setBackgroundColor() {
   var generateColor = getRandomColor(colors);
   document.querySelector("body").style.background = generateColor;
   document.getElementById("loadQuote").style.background = generateColor;
}

setBackgroundColor();

//Random Quote function. Generates a random number, and then calls the quote that correlates with the quote array.

function getRandomQuote(array) {
   var randomNumber = 0;
   randomNumber = Math.floor(Math.random() * quotes.length);
   if (randomNumber === 0) {
     return quotes[0];
   } else if (randomNumber) === 1) {
     return quotes[1];
   } else if (randomNumber) === 2) {
     return quotes[2];
   } else if (randomNumber) === 3) {
     return quotes[3];
   } else if (randomNumber) === 4) {
     return quotes[4];
   } else if (randomNumber) === 5) {
     return quotes[5];
   } else if (randomNumber) === 6) {
     return quotes[6];
   } else if (randomNumber) === 7) {
     return quotes[7];
   } else if (randomNumber) === 8) {
     return quotes[8];
   } else if (randomNumber) === 9) {
     return quotes[9];
   }
}

//Print Quote function. Retrieves information from the Random Quote function and prints it to the page.

function printQuote() {
   var randomQuote = getRandomQuote(quotes);
   HTML = '';
   HTML += '<p class="quote">' + randomQuote.quote + '</p>';
   HTML += '<p class="source">' + randomQuote.source;
   HTML += '</p>';
   document.getElementById("quote-box").innerHTML = HTML;
}

//These two lines of code keeps track of time elapsed. When a predetermined amount of time has passed, it forces a new quote and background color to be loaded.

var intervalID = window.setInterval(printQuote, 12000);
var intervalID = window.setInterval(setBackgroundColor, 12000);

//These two lines of code activate after an event trigger requirement has been met. They re-run the Random Quote function and Random Color function, respectively.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", setBackgroundColor, false);
