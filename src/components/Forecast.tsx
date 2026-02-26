import type { DailyForecast } from "../types/weather";
import { getWeatherInfo } from "../utils/weatherUtils";

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

    return (
        <div className="mt-6">
            {/* <h3 className="uppercase font-thin text-4xl mb-6 text-left text-white">Pronóstico para los próximos días</h3> */}
            <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between justify-center gap-4">
                {forecast.map((day) => {
                    const { day: weekday, formattedDate } = formatDate(day.date);
                    const weatherImage = getWeatherInfo(day.weathercode);

                    return (
                        <div
                            key={day.date}
                            className="bg-gray-950 bg-opacity-25 rounded-lg p-4 flex flex-col items-center text-center text-white max-w-xs sm:flex-1 sm:max-w-none mx-auto"
                        >
                            <p className="uppercase font-thin text-3xl text-white">
                                {weekday}
                            </p>

                            <p className="text-sm text-white">
                                {formattedDate}
                            </p>

                            <img
                                src={weatherImage.icon}
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
        </div>
    );
}