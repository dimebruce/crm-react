import { useNavigate } from "react-router-dom";

const NuevoCliente = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3 font-black">✅ Llena todo el formulario</p>

      {/* Agregando btn para regresar a raíz */}
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 front-bold rounded"
          onClick={() => navigate("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default NuevoCliente;
