/* global fetch */

import API_URL from './api_url.mjs';

const main = document.getElementById('main');
const authorField = document.getElementById('authorField');
const excerptField = document.getElementById('excerptField');
const saveDataButton = document.getElementById('saveDataButton');
const endMessage = document.getElementById('endMessage');
const result = document.getElementById('result');

saveDataButton.addEventListener('click', saveData);

async function saveData() {
  const defaultValue = 'unknown';
  const payLoad = JSON.stringify({
    author: authorField.value.trim() || defaultValue,
    excerpt: excerptField.value.trim() || defaultValue
  });
  try {
    const response = await fetch(`${ API_URL }/quotations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: payLoad
    });
    const responseText = await response.text();
    result.innerText = responseText;
    main.style.display = 'none';
    endMessage.style.display = 'block';
  } catch (err) {
    console.error('Error saving data:', err);
  }
}
