import { User, Sparkles } from 'lucide-react';

export default function AccountSelection({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Selecciona tu cuenta</h1>
      <p className="text-gray-600 mb-12">¿Cómo deseas usar Nail Match?</p>

      <div className="w-full max-w-sm space-y-6">
        {/* Cliente Card */}
        <button
          onClick={() => onNavigate('home-cliente')}
          className="w-full bg-white border-2 border-gray-300 p-8 flex flex-col items-center hover:border-gray-800 transition-colors"
        >
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <User size={40} className="text-gray-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Cliente</h2>
          <p className="text-gray-600 text-center">Diseña tus uñas y encuentra tu manicurista ideal</p>
        </button>

        {/* Manicurista Card */}
        <button
          onClick={() => onNavigate('dashboard-manicurista')}
          className="w-full bg-white border-2 border-gray-300 p-8 flex flex-col items-center hover:border-gray-800 transition-colors"
        >
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <Sparkles size={40} className="text-gray-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Manicurista</h2>
          <p className="text-gray-600 text-center">Conecta con clientes y gestiona tus citas</p>
        </button>
      </div>
    </div>
  );
}
