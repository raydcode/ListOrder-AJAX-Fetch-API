/**
 * @AJAX
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
    const https = new XMLHttpRequest();
    https.open('GET', 'https://type.fit/api/quotes', true);

    https.onload = function () {
      if (this.status === 200) {
        const response = shuffle(JSON.parse(this.responseText));

        let output = '';

        for (let i = 0; i < response.length; i++) {
          if (i == number.value) {
            break;
          }
          output += ` 
              <li>Quote: ${response[i].text}</li>
              <li>Author: ${response[i].author}</li>
              <hr/>
            `;
        }

        document.querySelector('.quotes').innerHTML = output;
      }
    };
    https.send();
  }
}

/**
 * Shuffle Quotes array
 *
 */

function shuffle(quotes) {
  let randomArray = quotes.length; 1643  
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
