import { Calendar, MessageSquare, User, Settings, Clock, CheckCircle } from 'lucide-react';

export default function DashboardManicurista({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const citasPendientes = [
    { cliente: 'Ana Pérez', servicio: 'Manicure Francesa', hora: '2:00 PM', fecha: 'Hoy' },
    { cliente: 'Laura Sánchez', servicio: 'Diseño Personalizado', hora: '4:00 PM', fecha: 'Hoy' },
    { cliente: 'Carmen Díaz', servicio: 'Uñas Acrílicas', hora: '10:00 AM', fecha: 'Mañana' },
  ];

  const mensajes = [
    { cliente: 'María Torres', mensaje: '¿Tienes disponibilidad para mañana?', tiempo: '5 min' },
    { cliente: 'Sofia Ramos', mensaje: 'Gracias por el servicio!', tiempo: '1 h' },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-300 p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Hola, María</h1>
            <p className="text-gray-600">Miércoles 7 Mayo 2026</p>
          </div>
          <button className="p-3 border-2 border-gray-300">
            <Settings size={20} className="text-gray-800" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-100 border-2 border-gray-300 p-3 text-center">
            <div className="text-2xl font-bold text-gray-800">5</div>
            <div className="text-xs text-gray-600">Hoy</div>
          </div>
          <div className="bg-gray-100 border-2 border-gray-300 p-3 text-center">
            <div className="text-2xl font-bold text-gray-800">12</div>
            <div className="text-xs text-gray-600">Semana</div>
          </div>
          <div className="bg-gray-100 border-2 border-gray-300 p-3 text-center">
            <div className="text-2xl font-bold text-gray-800">4.8</div>
            <div className="text-xs text-gray-600">Rating</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-20">
        {/* Citas Pendientes */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">Citas Pendientes</h2>
            <button className="text-gray-600 text-sm">Ver todas</button>
          </div>

          <div className="space-y-3">
            {citasPendientes.map((cita, i) => (
              <div key={i} className="bg-white border-2 border-gray-300 p-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-xl text-gray-500">×</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-gray-800">{cita.cliente}</h3>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 border border-gray-300">
                        {cita.fecha}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{cita.servicio}</p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={14} />
                      <span className="text-sm">{cita.hora}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-gray-800 text-white py-2 px-4 border-2 border-gray-900 text-sm flex items-center justify-center gap-2">
                    <CheckCircle size={16} />
                    Completar
                  </button>
                  <button className="px-4 border-2 border-gray-800 flex items-center justify-center">
                    <MessageSquare size={16} className="text-gray-800" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mensajes */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-gray-800">Mensajes</h2>
            <button className="text-gray-600 text-sm">Ver todos</button>
          </div>

          <div className="space-y-3">
            {mensajes.map((msg, i) => (
              <div key={i} className="bg-white border-2 border-gray-300 p-4 flex gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-xl text-gray-500">×</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-gray-800">{msg.cliente}</h3>
                    <span className="text-xs text-gray-500">{msg.tiempo}</span>
                  </div>
                  <p className="text-gray-600">{msg.mensaje}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('calendario-manicurista')}
              className="bg-white border-2 border-gray-300 p-6 text-center hover:border-gray-800 transition-colors"
            >
              <Calendar size={32} className="text-gray-600 mx-auto mb-2" />
              <p className="font-bold text-gray-800">Mi Agenda</p>
            </button>
            <button
              onClick={() => onNavigate('perfil-manicurista-edit')}
              className="bg-white border-2 border-gray-300 p-6 text-center hover:border-gray-800 transition-colors"
            >
              <User size={32} className="text-gray-600 mx-auto mb-2" />
              <p className="font-bold text-gray-800">Mi Perfil</p>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t-2 border-gray-300 p-4 fixed bottom-0 w-full">
        <div className="flex justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1">
            <Calendar size={24} className="text-gray-800" />
            <span className="text-xs text-gray-800">Inicio</span>
          </button>
          <button
            onClick={() => onNavigate('mensajes-manicurista')}
            className="flex flex-col items-center gap-1"
          >
            <MessageSquare size={24} className="text-gray-500" />
            <span className="text-xs text-gray-500">Mensajes</span>
          </button>
          <button
            onClick={() => onNavigate('perfil-manicurista-edit')}
            className="flex flex-col items-center gap-1"
          >
            <User size={24} className="text-gray-500" />
            <span className="text-xs text-gray-500">Perfil</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Settings size={24} className="text-gray-500" />
            <span className="text-xs text-gray-500">Ajustes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
