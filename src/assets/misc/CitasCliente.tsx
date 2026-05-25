import { Home, Calendar, MessageSquare, User, Clock, MapPin, ChevronRight } from 'lucide-react';

export default function CitasCliente({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const citasProximas = [
    {
      manicurista: 'María González',
      servicio: 'Diseño Personalizado',
      fecha: 'Mañana',
      dia: 'Jueves 15 Mayo',
      hora: '2:00 PM',
      duracion: '75 min',
      precio: '$50',
      ubicacion: '1.2 km'
    },
    {
      manicurista: 'Ana Martínez',
      servicio: 'Manicure Francesa',
      fecha: 'Viernes',
      dia: 'Viernes 16 Mayo',
      hora: '4:00 PM',
      duracion: '45 min',
      precio: '$35',
      ubicacion: '2.5 km'
    },
  ];

  const citasPasadas = [
    {
      manicurista: 'Sofia López',
      servicio: 'Uñas Acrílicas',
      dia: 'Lunes 12 Mayo',
      hora: '3:00 PM',
      precio: '$55',
    },
    {
      manicurista: 'María González',
      servicio: 'Manicure con Gel',
      dia: 'Miércoles 7 Mayo',
      hora: '11:00 AM',
      precio: '$45',
    },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-300 px-5 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Mis Citas</h1>
        <p className="text-gray-600">Gestiona tus reservaciones</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 pb-28 space-y-6">
        {/* Próximas Citas */}
        <div>
          <h2 className="font-bold text-gray-900 mb-3">Próximas Citas</h2>
          <div className="space-y-3">
            {citasProximas.map((cita, i) => (
              <div key={i} className="bg-white rounded-3xl border border-gray-300 p-4">
                <div className="flex gap-4 mb-3">
                  <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center shrink-0">
                    <span className="text-3xl text-gray-400">×</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-gray-900">{cita.manicurista}</h3>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                        {cita.fecha}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-1">{cita.servicio}</p>
                    <p className="font-bold text-gray-800">{cita.precio}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    <span>{cita.dia}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>{cita.hora} • {cita.duracion}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span>{cita.ubicacion}</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  <button className="flex-1 border border-gray-300 py-2 px-4 rounded-2xl text-sm text-gray-800">
                    Cancelar
                  </button>
                  <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-2xl text-sm">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historial */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">Historial</h2>
            <button className="text-sm text-gray-500">Ver todo</button>
          </div>
          <div className="space-y-2">
            {citasPasadas.map((cita, i) => (
              <button
                key={i}
                className="w-full bg-white rounded-2xl border border-gray-300 p-4 flex items-center gap-3 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center shrink-0">
                  <span className="text-2xl text-gray-400">×</span>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm">{cita.manicurista}</h3>
                  <p className="text-xs text-gray-600">{cita.servicio}</p>
                  <p className="text-xs text-gray-500 mt-1">{cita.dia} • {cita.hora}</p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-gray-800 text-sm mb-1">{cita.precio}</p>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              </button>
            ))}
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

          <button className="flex flex-col items-center text-gray-900">
            <Calendar size={22} />
            <span className="text-xs">Citas</span>
          </button>

          <button onClick={() => onNavigate('mensajes-cliente')} className="flex flex-col items-center text-gray-500">
            <MessageSquare size={22} />
            <span className="text-xs">Chat</span>
          </button>

          <button onClick={() => onNavigate('perfil-cliente')} className="flex flex-col items-center text-gray-500">
            <User size={22} />
            <span className="text-xs">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
