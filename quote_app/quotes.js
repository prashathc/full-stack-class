const quotes = [
  "quote number oneeeeeeeee",
  "quote number twooooooo",
  "quote number threeeee",
  "quote number fourrr"
];

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

module.exports = getRandomQuote;
