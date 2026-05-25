import { Home, Calendar, MessageSquare, User, ChevronRight, Camera, Settings, LogOut } from 'lucide-react';

export default function PerfilCliente({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const favoritos = [
    { nombre: 'María González', rating: '4.8', servicios: '12 servicios' },
    { nombre: 'Ana Martínez', rating: '4.9', servicios: '8 servicios' },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-300 px-5 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Mi Perfil</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-28">
        {/* Profile Info */}
        <div className="bg-white border-b border-gray-300 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="text-4xl text-gray-500">×</div>
              </div>
              <button className="absolute bottom-0 right-0 bg-gray-800 text-white p-1.5 rounded-full border-2 border-white">
                <Camera size={14} />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Ana Rodríguez</h2>
              <p className="text-gray-600">ana.rodriguez@email.com</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-100 rounded-2xl p-3 text-center">
              <div className="text-xl font-bold text-gray-800">12</div>
              <div className="text-xs text-gray-600">Citas</div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-3 text-center">
              <div className="text-xl font-bold text-gray-800">3</div>
              <div className="text-xs text-gray-600">Favoritas</div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-3 text-center">
              <div className="text-xl font-bold text-gray-800">8</div>
              <div className="text-xs text-gray-600">Reseñas</div>
            </div>
          </div>
        </div>

        {/* Favoritas */}
        <div className="bg-white border-b border-gray-300 p-6">
          <h3 className="font-bold text-gray-900 mb-3">Mis Favoritas</h3>
          <div className="space-y-3">
            {favoritos.map((fav, i) => (
              <button
                key={i}
                onClick={() => onNavigate('manicurista-profile')}
                className="w-full bg-gray-50 rounded-2xl border border-gray-300 p-3 flex items-center gap-3 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-300 flex items-center justify-center shrink-0">
                  <span className="text-2xl text-gray-400">×</span>
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm">{fav.nombre}</h4>
                  <p className="text-xs text-gray-600">⭐ {fav.rating} • {fav.servicios}</p>
                </div>

                <ChevronRight size={16} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white p-6">
          <h3 className="font-bold text-gray-900 mb-3">Configuración</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Settings size={20} className="text-gray-600" />
                <span className="text-gray-800">Editar Perfil</span>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-gray-600" />
                <span className="text-gray-800">Métodos de Pago</span>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <MessageSquare size={20} className="text-gray-600" />
                <span className="text-gray-800">Notificaciones</span>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <User size={20} className="text-gray-600" />
                <span className="text-gray-800">Privacidad</span>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </button>

            <button
              onClick={() => onNavigate('welcome')}
              className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-red-50 transition-colors text-red-600"
            >
              <LogOut size={20} />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-6 py-3">
        <div className="max-w-md mx-auto flex justify-between">
          <button onClick={() => onNavigate('home-cliente')} className="flex flex-col items-center text-gray-500">
            <Home size={22} />
            <span className="text-xs">Home</span>
          </button>

          <button onClick={() => onNavigate('citas-cliente')} className="flex flex-col items-center text-gray-500">
            <Calendar size={22} />
            <span className="text-xs">Citas</span>
          </button>

          <button onClick={() => onNavigate('mensajes-cliente')} className="flex flex-col items-center text-gray-500">
            <MessageSquare size={22} />
            <span className="text-xs">Chat</span>
          </button>

          <button className="flex flex-col items-center text-gray-900">
            <User size={22} />
            <span className="text-xs">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
