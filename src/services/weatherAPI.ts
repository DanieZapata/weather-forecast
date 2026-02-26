const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getCityCoordinates(city: string) {
  try {
    const res = await fetch(`${GEO_URL}?name=${city}&count=1`);

    if (!res.ok) {
      throw new Error("FETCH_ERROR");
    }

    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      throw new Error("CITY_NOT_FOUND");
    }

    return data.results[0];

  } catch (error) {
    if (error instanceof Error && error.message !== "") {
      throw error;
    }
    throw new Error("NETWORK_ERROR");
  }
}

export async function getWeather(lat: number, lon: number) {
  try {
    const res = await fetch(
      `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&forecast_days=7&timezone=auto`
    );

    if (!res.ok) {
      throw new Error("FETCH_ERROR");
    }

    return await res.json();

  } catch (error) {

    if (error instanceof Error && error.message !== "") {
      throw error;
    }

    throw new Error("NETWORK_ERROR");
  }
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