const quotes = [
  {
    author: "Maya Angelou",
    quote: "You can’t use up creativity. The more you use, the more you have.",
  },
  {
    author: "Albert Einstein",
    quote: "Only a life lived for others is a life worthwhile.",
  },
  {
    author: "Steve Jobs",
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  },
  {
    author: "Franklin D. Roosevelt",
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
  },
  {
    author: "Benjamin Franklin",
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  },
  {
    author: "Thomas A. Edison",
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  },
  {
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    author: "Wayne Gretzky",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Theodore Roosevelt",
    quote: "Believe you can and you're halfway there.",
  },
  {
    author: "Oprah Winfrey",
    quote: "You become what you believe.",
  },
];

var index = 0; //index of quote
const colors = [
  "#000000",
  "#2ecc71",
  "#e67e22",
  "#3498db",
  "#9b59b6",
  "#a29bfe",
  "#e84393",
  "#00cec9",
  "#ff4757",
  "#70a1ff",
];

function changeQuote() {
  $("#text").fadeOut(500);
  $("#author").fadeOut(500);

  $("body").css("backgroundColor", colors[Math.floor(Math.random() * 10)]);

  index += 1;
  if (index > quotes.length - 1) index = 0; //if index reach the maximum, reset to zero

  class Quote extends React.Component {
    render() {
      return <span>{quotes[index].quote}</span>;
    }
  }

  class Author extends React.Component {
    render() {
      return <span>{quotes[index].author}</span>;
    }
  }
  setTimeout(newText, 500);
  function newText() {
    ReactDOM.render(<Quote />, text);
    ReactDOM.render(<Author />, author);
  }
  $("#text").fadeIn();
  $("#author").fadeIn();
}
