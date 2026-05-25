import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Reserva({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState('2:00 PM');

  const dates = [
    { day: 'Lun', date: 12 },
    { day: 'Mar', date: 13 },
    { day: 'Mié', date: 14 },
    { day: 'Jue', date: 15 },
    { day: 'Vie', date: 16 },
    { day: 'Sáb', date: 17 },
    { day: 'Dom', date: 18 },
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-300 p-4 flex items-center gap-4">
        <button onClick={() => onNavigate('manicurista-profile')}>
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Reservar Cita</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 pb-32">
        {/* Service Summary */}
        <div className="bg-white border-2 border-gray-300 p-4 mb-6">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center">
              <div className="text-3xl text-gray-500">×</div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 mb-1">María González</h3>
              <p className="text-gray-600 mb-1">Diseño Personalizado</p>
              <p className="font-bold text-gray-800">$35 • 75 min</p>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
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
                className={`p-3 border-2 ${
                  selectedDate === d.date
                    ? 'bg-gray-800 text-white border-gray-900'
                    : 'bg-white text-gray-800 border-gray-300'
                }`}
              >
                <div className="text-xs mb-1">{d.day}</div>
                <div className="font-bold">{d.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-4">Horarios Disponibles</h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 border-2 ${
                  selectedTime === time
                    ? 'bg-gray-800 text-white border-gray-900'
                    : 'bg-white text-gray-800 border-gray-300'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-3">Notas (opcional)</h3>
          <textarea
            placeholder="Agrega cualquier detalle adicional..."
            className="w-full bg-white border-2 border-gray-300 p-4 h-24 text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* Summary */}
        <div className="bg-white border-2 border-gray-300 p-4">
          <h3 className="font-bold text-gray-800 mb-3">Resumen</h3>
          <div className="space-y-2 text-gray-600">
            <div className="flex justify-between">
              <span>Fecha:</span>
              <span className="font-bold text-gray-800">Jueves 15 Mayo</span>
            </div>
            <div className="flex justify-between">
              <span>Hora:</span>
              <span className="font-bold text-gray-800">{selectedTime}</span>
            </div>
            <div className="flex justify-between">
              <span>Servicio:</span>
              <span className="font-bold text-gray-800">Diseño Personalizado</span>
            </div>
            <div className="flex justify-between border-t-2 border-gray-300 pt-2 mt-2">
              <span>Total:</span>
              <span className="text-xl font-bold text-gray-800">$35</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="bg-white border-t-2 border-gray-300 p-4 fixed bottom-0 w-full">
        <button
          onClick={() => onNavigate('home-cliente')}
          className="w-full bg-gray-800 text-white py-4 px-6 border-2 border-gray-900"
        >
          Confirmar Cita
        </button>
      </div>
    </div>
  );
}
