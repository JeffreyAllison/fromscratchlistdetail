// import functions and grab DOM elements

import { getAmps } from './fetch-utils.js';
import { renderAmp } from './render-utils.js';

const ampListContainer = document.getElementById('amp-list-container');

window.addEventListener('load', async () => {

  const theAmps = await getAmps();

  for (let amp of theAmps) {
    const ampEl = renderAmp(amp);

    ampListContainer.append(ampEl);
  }

});


// let state

// set event listeners 
  // get user input
  // use user input to update state
  // update DOM to reflect the new state
