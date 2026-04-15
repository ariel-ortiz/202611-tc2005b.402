/* global fetch */

import API_URL from './api_url.mjs';

const deleteAllButton = document.getElementById('deleteAllButton');
const main = document.getElementById('main');
const endMessage = document.getElementById('endMessage');
const result = document.getElementById('result');

deleteAllButton.addEventListener('click', doDelete);

async function doDelete() {
  try {
    const response = await fetch(`${ API_URL }/quotations`, {
      method: 'DELETE'
    });
    const responseText = await response.text();
    result.innerText = responseText;
    main.style.display = 'none';
    endMessage.style.display = 'block';
  } catch (err) {
    console.error('Error deleting data:', err);
  }
}
