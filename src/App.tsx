import { SearchCity } from "./components/SearchCity";
import { CurrentWeather } from "./components/CurrentWeather";
import { Forecast } from "./components/Forecast";
import { Loader, ErrorMessage } from "./components/Message";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { city, current, forecast, loading, error, searchCity } = useWeather();

  return (
    <div className="p-8 mx-auto">
      <SearchCity onSearch={searchCity} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {current && <CurrentWeather city={city} data={current} />}
      {forecast.length > 0 && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;