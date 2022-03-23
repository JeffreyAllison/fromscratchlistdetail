export function renderAmp(amp) {
  const div = document.createElement('div');
  const a = document.createElement('a');
  const img = document.createElement('img');
  const p = document.createElement('p');

  div.classList.add('amp');

  p.textContent = amp.name;
  img.src = `./assets/${amp.manufacturer}.png`;
  a.href = `./detail/?id=${amp.id}`;

  div.append(p, img);

  a.append(div);

  return a;

}

export function renderAmpDetail(amp) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const nameEl = document.createElement('h2');
  const manufacturerEl = document.createElement('h4');
  const yearEl = document.createElement('p');
  const toneEl = document.createElement('p');
  const reissueEl = document.createElement('p');
  const wattsEl = document.createElement('p');

  div.classList.add('amp-detail');

  nameEl.textContent = amp.name;
  nameEl.classList.add('name');

  manufacturerEl.textContent = `manufactured by: ${amp.manufacturer}`;
  manufacturerEl.classList.add('manufacturer');

  yearEl.textContent = `first introduced in: ${amp.year}`;
  yearEl.classList.add('year');

  toneEl.textContent = `tonal characteristics: ${amp.tone_description}`;
  toneEl.classList.add('tone_description');

  wattsEl.textContent = `output wattage: ${amp.watts}`;
  wattsEl.classList.add('watts');

  reissueEl.textContent = `Currently in production: ${amp.production_reissue}`;
  reissueEl.classList.add('production_reissue');

  img.src = `../assets/${amp.manufacturer}.png`;

  div.append(nameEl, manufacturerEl, yearEl, toneEl, wattsEl, reissueEl, img);

  return div;
}