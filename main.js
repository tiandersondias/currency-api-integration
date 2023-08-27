const url = "http://worldtimeapi.org/api/timezone/America/Araguaina";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const time = data.datetime;
  document.querySelector("#time").innerHTML = time;
}

getData();
