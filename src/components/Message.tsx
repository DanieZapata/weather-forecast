import { useEffect, useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface Props {
  type: "loading" | "error" | "success";
  message: string;
}

export function Message({ type, message }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (type === "success" || type === "error") {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [type]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex flex-col gap-4 items-center justify-center z-50 text-white transition-all duration-300">

      {type === "loading" && (
        <>
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
          <p className="text-lg font-light">{message}</p>
        </>
      )}

      {type === "success" && (
        <>
          <CheckCircle size={48} className="opacity-90" />
          <p className="text-lg font-light">{message}</p>
        </>
      )}

      {type === "error" && (
        <>
          <XCircle size={48} className="opacity-90" />
          <p className="text-lg font-light">{message}</p>
        </>
      )}
    </div>
  );
}