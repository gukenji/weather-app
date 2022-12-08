
export default async function getInfo(){
  const api_key = '2144e421c9953a56a184bb6357108695';
  const query = document.getElementById('search').value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}`);
  const data = await response.json();
  return console.log(data);
};


