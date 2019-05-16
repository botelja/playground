const quotes = [
    {
        "author": "Abraham Lincoln",
        "quote": "Things may come to those who wait, but only the things left by those who hustle."
    },
    {
        "author": "Adam Smith",
        "quote": "The great secret of education is to direct vanity to proper objects."
    },
    {
        "author": "Alain de Botton",
        "quote": "It’s not that travel just broadens your mind, rather it enables you to see how narrow your oppressor’s minds are."
    },
    {
        "author": "Alan Watts",
        "quote": "A person who never made a mistake never tried anything new."
    },
    {
        "author": "Albert Camus",
        "quote": "It is not humiliating to be unhappy. Physical suffering is sometimes humiliating, but the suffering of being cannot be, it is life."
    }

]

const quoteBtn = document.getElementById('quoteBtn');
const quote = document.getElementById('quote');
const quoteAuthor = document.getElementById('quoteAuthor');

function displayQuote() {
    let random = Math.floor(Math.random() * Math.floor(quotes.length));
    quote.textContent = quotes[random].quote;
    quoteAuthor.textContent = quotes[random].author;
}

quoteBtn.addEventListener('click', displayQuote);