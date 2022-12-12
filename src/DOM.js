import "./style.css";
import getData, { getFlag } from "./getdata";

export default function component() {
  const nav = navbar();
  const main = mainContent();
  const materialIconLink = materialIcons();

  return [nav, main];
}

function navbar() {
  const nav = document.createElement("nav");
  const logo = document.createElement("h1");

  logo.textContent = "Como está o tempo?";
  logo.classList.add("logo");
  nav.appendChild(logo);
  nav.appendChild(searchbar());
  return nav;
}

function searchbar() {
  const container = document.createElement("div");
  const input = document.createElement("input");
  const searchIcon = document.createElement("span");

  container.classList.add("searchbar");
  input.type = "text";
  input.id = "search";
  input.placeholder = "Digite o nome de uma cidade";
  searchIcon.classList.add("material-symbols-outlined");
  searchIcon.textContent = "search";
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchIcon.click();
    }
  })
  searchIcon.addEventListener("click", showInfos);

  container.appendChild(input);
  container.appendChild(searchIcon);

  return container;
}

export function materialIcons() {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
  link.rel = "stylesheet";
  return link;
}

function mainContent() {
  const container = document.createElement("div");
  container.classList.add("container");
  return container;
}

async function showInfos() {
  const container = document.getElementsByClassName("container")[0];
  const temp_container = document.createElement('div');
  const more_infos_container = document.createElement('div');
  const local_container = document.createElement('div');
  const condition_container = document.createElement('div');
  const flag = document.createElement("img");
  const flag_img_src = await getFlag();
  const local_text = document.createElement('p');
  const response = await getData();
  const main = response.data.main;
  const temp = parseInt(main.temp - 273.15);
  const temp_max = parseInt(main.temp_max - 273.15);
  const temp_min = parseInt(main.temp_min - 273.15);
  const feeling_temp = parseInt(main.feels_like - 273.15);
  const humidity = main.humidity;
  const temp_text = document.createElement('p');
  const temp_max_text = document.createElement('p');
  const temp_min_text = document.createElement('p');
  const feeling_temp_text = document.createElement('p');
  const humidity_text = document.createElement('p');
  const condition_text = document.createElement('p');
  const celsius_text = document.createElement('span');
  const state = response.data.name;
  const country = response.data.sys.country;
  const condition = response.data.weather[0].description;
  
  console.log(response.data)
    
  container.innerHTML = null;
  container.classList.add('info');
  flag.src = flag_img_src;
  local_text.textContent = `${state} - ${country}`;
  temp_text.textContent = `${temp}`;
  celsius_text.textContent = '°C';
  temp_max_text.textContent = `Temperatura máxima: ${temp_max}°C`;
  temp_min_text.textContent = `Temperatura mínima: ${temp_min}°C`;
  feeling_temp_text.textContent = `Sensação térmica: ${feeling_temp}°C`;
  humidity_text.textContent = `Umidade do ar: ${humidity}%`;
  condition_text.textContent = condition;
  temp_container.classList.add('temp_container');
  more_infos_container.classList.add('more_infos_container');
  local_container.classList.add('local_container');
  condition_container.classList.add('condition_container');


  temp_text.appendChild(celsius_text);
  temp_container.appendChild(temp_text);
  more_infos_container.appendChild(temp_max_text);
  more_infos_container.appendChild(temp_min_text);
  more_infos_container.appendChild(feeling_temp_text);
  more_infos_container.appendChild(humidity_text);
  condition_container.appendChild(local_text);
  condition_container.appendChild(condition_text);
  local_container.appendChild(flag);
  local_container.appendChild(condition_container);
  container.appendChild(temp_container);
  container.appendChild(more_infos_container);
  container.appendChild(local_container);
}
