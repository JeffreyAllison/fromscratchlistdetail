import { getAmp } from '../fetch-utils.js';
import { renderAmpDetail } from '../render-utils.js';

const ampDetailContainer = document.getElementById('amp-detail-container');

window.addEventListener('load', async () => {
  const data = new URLSearchParams(window.location.search);
  const getAmpId = data.get('id');

  const theAmp = await getAmp(getAmpId);

  const ampEl = renderAmpDetail(theAmp);

  ampDetailContainer.append(ampEl);
});