export interface GeoLocation {
  name: string;
  latitude: number;
  longitude: number;
}

export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  weathercode: number;
}

export interface DailyForecast {
  date: string;
  tempMax: number;
  tempMin: number;
  weathercode: number;
}