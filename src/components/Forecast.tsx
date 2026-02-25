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

    return (
        <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-between gap-4">
            {forecast.map((day) => {
                const { day: weekday, formattedDate } = formatDate(day.date);

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