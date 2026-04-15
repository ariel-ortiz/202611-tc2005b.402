/* global fetch */

import API_URL from './api_url.mjs';

const result = document.getElementById('result');

getQuotations();

async function getQuotations() {
  try {
    const response = await fetch(`${ API_URL }/quotations`);
    const body = await response.json();
    if (body.length === 0) {
      result.innerText = 'Oops! Database is empty.';
      return;
    }
    let htmlList = '';
    for (const row of body) {
      htmlList += `
        <li>
          ${row.author}:
          <a href="${row.url}">
            ${row.prelude}
          </a>
        </li>
      `;
    }
    result.innerHTML = '<ul>' + htmlList + '</ul>';
  } catch (err) {
    console.error('Error fetching quotations:', err);
  }
}
