export const Loader = () => <p>Cargando...</p>;
export const ErrorMessage = ({ message }: { message: string }) => (
  <p className="text-red-500">{message}</p>
);