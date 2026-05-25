import { ChevronLeft, ChevronRight, Plus, Clock, User } from 'lucide-react';
import { useState } from 'react';

export default function CalendarioManicurista({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selectedDate, setSelectedDate] = useState(15);
  const [view, setView] = useState<'calendario' | 'lista'>('lista');

  const dates = [
    { day: 'Lun', date: 12 },
    { day: 'Mar', date: 13 },
    { day: 'Mié', date: 14 },
    { day: 'Jue', date: 15 },
    { day: 'Vie', date: 16 },
    { day: 'Sáb', date: 17 },
    { day: 'Dom', date: 18 },
  ];

  const citasPorFecha: { [key: number]: any[] } = {
    15: [
      { hora: '10:00 AM', cliente: 'Ana Pérez', servicio: 'Manicure Francesa', duracion: '45 min', precio: '$35' },
      { hora: '11:00 AM', cliente: 'Laura Sánchez', servicio: 'Diseño Personalizado', duracion: '75 min', precio: '$50' },
      { hora: '2:00 PM', cliente: 'Carmen Díaz', servicio: 'Uñas Acrílicas', duracion: '90 min', precio: '$55' },
      { hora: '4:00 PM', cliente: 'Sofia Torres', servicio: 'Manicure con Gel', duracion: '60 min', precio: '$45' },
    ],
    16: [
      { hora: '9:00 AM', cliente: 'María López', servicio: 'Manicure Francesa', duracion: '45 min', precio: '$35' },
      { hora: '12:00 PM', cliente: 'Rosa Martínez', servicio: 'Diseño Personalizado', duracion: '75 min', precio: '$50' },
    ],
  };

  const citasDelDia = citasPorFecha[selectedDate] || [];

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-300 p-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('dashboard-manicurista')} className="flex items-center gap-2">
            <ChevronLeft size={24} className="text-gray-800" />
            <h1 className="text-xl font-bold text-gray-800">Mi Agenda</h1>
          </button>
          <button className="bg-gray-800 text-white px-3 py-2 border-2 border-gray-900 text-sm flex items-center gap-1">
            <Plus size={16} />
            Bloquear Horario
          </button>
        </div>

        {/* Date Selector */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800">Mayo 2026</h3>
          <div className="flex gap-2">
            <button className="p-2 border-2 border-gray-300">
              <ChevronLeft size={16} className="text-gray-800" />
            </button>
            <button className="p-2 border-2 border-gray-300">
              <ChevronRight size={16} className="text-gray-800" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {dates.map((d) => (
            <button
              key={d.date}
              onClick={() => setSelectedDate(d.date)}
              className={`p-2 border-2 ${
                selectedDate === d.date
                  ? 'bg-gray-800 text-white border-gray-900'
                  : 'bg-white text-gray-800 border-gray-300'
              }`}
            >
              <div className="text-xs mb-1">{d.day}</div>
              <div className="font-bold text-sm">{d.date}</div>
              {citasPorFecha[d.date] && (
                <div className="w-1 h-1 bg-current rounded-full mx-auto mt-1"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b-2 border-gray-300 p-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{citasDelDia.length}</div>
            <div className="text-xs text-gray-600">Citas hoy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              ${citasDelDia.reduce((sum, c) => sum + parseInt(c.precio.replace('$', '')), 0)}
            </div>
            <div className="text-xs text-gray-600">Ingresos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              {citasDelDia.reduce((sum, c) => sum + parseInt(c.duracion), 0)} min
            </div>
            <div className="text-xs text-gray-600">Tiempo total</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {citasDelDia.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={32} className="text-gray-400" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">No hay citas para este día</h3>
            <p className="text-gray-600">Disfruta tu día libre!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {citasDelDia.map((cita, i) => (
              <div key={i} className="bg-white border-2 border-gray-300 p-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={20} className="text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-800">{cita.cliente}</h3>
                        <p className="text-gray-600 text-sm">{cita.servicio}</p>
                      </div>
                      <span className="font-bold text-gray-800">{cita.precio}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{cita.hora}</span>
                      </div>
                      <span>•</span>
                      <span>{cita.duracion}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 border-2 border-gray-300 py-2 px-4 text-sm text-gray-800">
                    Cancelar
                  </button>
                  <button className="flex-1 border-2 border-gray-300 py-2 px-4 text-sm text-gray-800">
                    Reprogramar
                  </button>
                  <button className="flex-1 bg-gray-800 text-white py-2 px-4 border-2 border-gray-900 text-sm">
                    Completar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
