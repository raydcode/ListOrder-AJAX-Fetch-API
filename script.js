/**
 * @FETCH users:
 */

const btn = document.getElementById('btn');
const number = document.getElementById('number');

btn.addEventListener('click', getQuotes);

// CREATE FUNCTION GET Quotes
function getQuotes(e) {
  e.preventDefault();

  if (Number(number.value) <= 0) {
    return alert('Please enter a number');
  } else {
    fetch('https://type.fit/api/quotes')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const Quotesdata = shuffle(data);
        let output = '';

        for (let i = 0; i < Quotesdata.length; i++) {
          if (i == number.value) {
            break;
          }
          output += ` 
                <li>Quote: ${Quotesdata[i].text}</li>
                <li>Author: ${
                  Quotesdata[i].author == null
                    ? 'anonymous'
                    : Quotesdata[i].author
                }</li>
                <hr/>
              `;
        }

        document.querySelector('.quotes').innerHTML = output;
      });
  }
}

/**
 * Shuffle Quotes array
 *
 */

function shuffle(quotes) {
  let randomArray = quotes.length;
  1643;
  let tempvalue, randomIndex;

  while (randomArray > 0) {
    randomIndex = Math.floor(Math.random() * randomArray);

    randomArray--;

    tempvalue = quotes[randomArray];
    quotes[randomArray] = quotes[randomIndex];
    quotes[randomIndex] = tempvalue;
  }

  return quotes;
}
