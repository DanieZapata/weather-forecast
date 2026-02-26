import { useState } from "react";

interface Props {
    onSearch: (city: string) => void;
}

export function SearchCity({ onSearch }: Props) {
    const [value, setValue] = useState("");

    return (
        <div>
            <div className="flex mx-auto gap-2">
                <input
                    className="flex-1 rounded-lg bg-gray-950 bg-opacity-50 p-1 text-white placeholder:text-white-400 focus:outline-none"
                    placeholder="Buscar ciudad"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    className="bg-gray-900 text-white px-6 py-2 rounded-xl"
                    onClick={() => onSearch(value)}
                >
                    Buscar
                </button>
            </div>
        </div>
    );
}