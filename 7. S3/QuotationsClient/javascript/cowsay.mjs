/* global fetch */

import API_URL from './api_url.mjs';

const excerpt = document.getElementById('excerpt');
const author = document.getElementById('author');

getRandomQuotation();

async function getRandomQuotation() {
  try {
    const response = await fetch(`${ API_URL }/quotations`);
    const body = await response.json();
    const max_quotations = body.length;
    if (max_quotations > 0) {
      const randomIndex = Math.floor(Math.random() * max_quotations);
      const randomQuotationUrl = body[randomIndex].url;
      const randomResponse = await fetch(randomQuotationUrl);
      const randomBody = await randomResponse.json();
      excerpt.innerText = randomBody.excerpt;
      author.innerText = '\u{2014} ' + randomBody.author;
    } else {
      excerpt.innerText = 'Oops! Database is empty.';
    }
  } catch (err) {
    console.error('Error fetching quotations:', err);
  }
}
