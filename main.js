const url = "http://worldtimeapi.org/api/timezone/America/Vancouver";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();

  (data) => {
    const timeZone = time.data.America.Vancouver;
    document.querySelector("body").innerHTML = timeZone;
  };
}

getData();
