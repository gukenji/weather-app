
export default async function getInfo(){
  const api_key = '2144e421c9953a56a184bb6357108695';
  const query = document.getElementById('search').value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&lang=pt_br&appid=${api_key}`);
  const data = await response.json();
  const country_code = data.sys.country;
  const country = await fetch(`https://restcountries.com/v3.1/alpha/${country_code}`);
  const country_data =  await country.json();
  const country_name = country_data[0].altSpellings[1];

  return { data, country_name };
};

export async function getFlag(){
  const response = await (getInfo());
  const country = response.data.sys.country;
  const flag = `https://www.countryflagicons.com/FLAT/64/${country}.png`;
  return flag;
};