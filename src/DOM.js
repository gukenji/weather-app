import './style.css';
import getData from './openweather';

export default function component(){
  const nav = navbar();
  const materialIconLink = materialIcons();
  return [nav];
}

function navbar(){
  const nav = document.createElement('nav');
  const logo = document.createElement('h1');

  logo.textContent = 'Como está o tempo?';
  logo.classList.add('logo');
  nav.appendChild(logo);
  nav.appendChild(searchbar());
  return nav;
}

function searchbar(){
  const container = document.createElement('div');
  const input = document.createElement('input');
  const submit = document.createElement('input');
  const searchIcon = document.createElement('span');
  
  container.classList.add('searchbar');
  input.type = 'text';
  input.id = 'search'
  input.placeholder = 'Digite o nome de uma cidade';
  searchIcon.classList.add('material-symbols-outlined');
  searchIcon.textContent = 'search';
  searchIcon.addEventListener('click', getData);

  container.appendChild(input);
  container.appendChild(searchIcon);

  return container;
}

export function materialIcons() {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
  link.rel = 'stylesheet'
  return link;
}