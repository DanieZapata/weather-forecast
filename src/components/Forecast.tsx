import type { DailyForecast } from "../types/weather";

interface Props {
    forecast: DailyForecast[];
}

export function Forecast({ forecast }: Props) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);

        const day = new Intl.DateTimeFormat("es-ES", {
            weekday: "long",
        }).format(date);

        const formattedDate = new Intl.DateTimeFormat("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }).format(date);

        return { day, formattedDate };
    };

    const getWeatherImage = (weathercode: number) => {
        if (weathercode === 0) return "/src/assets/weather/sunny.png";
        if (weathercode >= 1 && weathercode <= 3) return "/src/assets/weather/cloudy.png";
        if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weathercode)) return "/src/assets/weather/rainy.png";
        if ([71, 73, 75, 77, 85, 86].includes(weathercode)) return "/src/assets/weather/snowy.png";
        if ([95, 96, 99].includes(weathercode)) return "/src/assets/weather/storm.png";
        return "/src/assets/weather/sunny.png";
    };

    return (
        <div className="mt-28 flex flex-col sm:flex-row flex-wrap justify-between gap-4">
            {forecast.map((day) => {
                const { day: weekday, formattedDate } = formatDate(day.date);
                const weatherImage = getWeatherImage(day.weathercode);

                return (
                    <div
                        key={day.date}
                        className="border rounded-lg p-4 flex flex-col items-center text-center flex-1 max-w-xs">

                        <p className="capitalize font-semibold text-lg">
                            {weekday}
                        </p>

                        <p className="text-sm text-gray-500">
                            {formattedDate}
                        </p>

                        <img
                            src={weatherImage}
                            alt="Weather icon"
                            className="w-26 h-26 mt-2"
                        />

                        <div className="mt-3">
                            <p>Temp Máx: {day.tempMax}°C</p>
                            <p>Temp Mín: {day.tempMin}°C</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}