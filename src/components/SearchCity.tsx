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
                    className="flex-1 border p-2 rounded-lg"
                    placeholder="Buscar ciudad"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    className="bg-blue-950 text-white px-6 py-2 rounded-xl"
                    onClick={() => onSearch(value)}
                >
                    Buscar
                </button>
            </div>
        </div>
    );
}