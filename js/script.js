/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

//Quote array. When called, will print one randomly selected quote to the page.

var quotes = [
   {
    quote: "Some people can read War and Peace and come away thinking it's a simple adventure story. Others can read the ingredients on a chewing gum wrapper and unlock the secrets of the universe.",
    author: "Lex Luthor",
    media: "Superman",
    year: "1978",
    genre: "Insight"
   },
   {
    quote: "With great power, comes great responsibility.",
    author: "Ben Parker",
    media: "Spider-Man",
    year: "2002",
    genre: "Wisdom"
   },
   {
    quote: "I believe there's a hero in all of us that keeps us honest, noble and finally allows us to die with pride. Even though sometimes we have to be steady and give up the things we want the most. Even our dreams.",
    author: "May Parker",
    media: "Spider-Man 2",
    year: "2004",
    genre: "Hope"
   },
   {
    quote: "Do not pity the dead, Harry. Pity the living and above all, those who live without love.",
    author: "Albus Dumbledore",
    media: "Harry Potter and the Deathly Hallows",
    year: "2007",
    genre: "Wisdom"
   },
   {
    quote: "It is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it.",
    author: "Albus Dumbledore",
    media: "Harry Potter and the Deathly Hallows",
    year: "2007",
    genre: "Insight"
   },
   {
    quote: "Only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt",
    media: "First Inaugural Address",
    year: "1932",
    genre: "Wisdom"
   },
   {
    quote: "Cut off a wolf's head and it still has the power to bite.",
    author: "Lady Eboshi",
    media: "Princess Mononoke",
    year: "1999",
    genre: "Wisdom"
   },
   {
    quote: "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are.",
    author: "Mewtwo",
    media: "Pokemon The First Movie",
    year: "1999",
    genre: "Inspiring"
   },
   {
    quote: "I'm not crazy about reality, but it's still the only place to get a decent meal.",
    author: 'Julius "Groucho" Marx',
    genre: "Wisdom"
   },
   {
    quote: "Smile, because it confuses people. Smile, because it's easier than explaining what is killing you inside.",
    author: "The Joker",
    media: "The Dark Knight",
    year: "2008",
    genre: "emotional"
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
     return quotes[randomNumber];
}

//Print Quote function. Retrieves information from the Random Quote function and prints it to the page.

function printQuote() {
   var randomQuote = getRandomQuote(quotes);
   HTML = '';
   HTML += '<p class="quote">' + randomQuote.quote + '</p>';
   HTML += '<p class="author">' + randomQuote.author;
   if (randomQuote.media !== undefined) {
     HTML += '<span class="media">' + randomQuote.media + '</span>';
   }
   if (randomQuote.year !== undefined) {
     HTML += '<span class="year">' + randomQuote.year + '</span>';
   }
   HTML += '<p class="genre">' + randomQuote.genre;
   HTML += '</p>';
   document.getElementById("quote-box").innerHTML = HTML;
}

printQuote();

//These two lines of code keeps track of time elapsed. When a predetermined amount of time has passed, it forces a new quote and background color to be loaded.

var intervalID = window.setInterval(printQuote, 12000);
var intervalID = window.setInterval(setBackgroundColor, 12000);

//These two lines of code activate after an event trigger requirement has been met. They re-run the Random Quote function and Random Color function, respectively.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", setBackgroundColor, false);
