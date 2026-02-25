interface Props {
  message: string;
  type?: "error" | "success" | "loading";
}

export function Message({ message, type = "loading" }: Props) {
  const bgColor =
    type === "error"
      ? "bg-red-100 text-red-700 border-red-400"
      : type === "success"
      ? "bg-green-100 text-green-700 border-green-400"
      : "bg-blue-100 text-blue-700 border-blue-400";

  return (
    <div className={`border-l-4 ${bgColor} p-2 rounded my-4`}>
      <p className="font-medium">
        {type === "loading" ? "Cargando..." : message}
      </p>
    </div>
  );
}