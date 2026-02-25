const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getCityCoordinates(city: string) {
  const res = await fetch(`${GEO_URL}?name=${city}&count=1`);
  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("Ciudad no encontrada");
  }

  return data.results[0];
}

export async function getWeather(lat: number, lon: number) {
  const res = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&forecast_days=7&timezone=auto`
  );

  return res.json();
}
//This part of the code is commented out because the date was manually formatted to match your computer's date.
/**function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
  
export async function getWeather(lat: number, lon: number) {
  const today = new Date();
  const endDate = new Date();
  endDate.setDate(today.getDate() + 6);

  const start = formatDate(today);
  const end = formatDate(endDate);

  const res = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&start_date=${start}&end_date=${end}&timezone=auto`
  );

  if (!res.ok) {
    throw new Error("Error al obtener el clima");
  }

  return res.json();
} */