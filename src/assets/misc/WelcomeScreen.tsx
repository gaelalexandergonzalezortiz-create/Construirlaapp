export default function WelcomeScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Logo Placeholder */}
      <div className="w-32 h-32 bg-gray-300 border-2 border-gray-400 flex items-center justify-center mb-12">
        <div className="text-6xl text-gray-500">×</div>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">Nail Match</h1>
      <p className="text-gray-600 mb-12">Tu manicurista perfecta</p>

      <div className="w-full max-w-sm space-y-4">
        <button
          onClick={() => onNavigate('account-selection')}
          className="w-full bg-gray-800 text-white py-4 px-6 border-2 border-gray-900"
        >
          Iniciar Sesión
        </button>

        <button
          onClick={() => onNavigate('account-selection')}
          className="w-full bg-white text-gray-800 py-4 px-6 border-2 border-gray-800"
        >
          Crear Cuenta
        </button>
      </div>
    </div>
  );
}
