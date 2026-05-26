import { ChevronLeft, ChevronRight, Clock, MapPin, Star } from 'lucide-react';
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
    '4:00 PM', '5:00 PM', '6:00 PM',
  ];

  const unavailable = new Set(['11:00 AM', '1:00 PM', '5:00 PM']);

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 py-4 flex items-center gap-4">
        <button
          onClick={() => onNavigate('manicurista-profile')}
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: '#F4F4F4' }}
        >
          <ChevronLeft size={20} className="text-[#1F1F1F]" />
        </button>
        <div>
          <p className="text-[10px] text-[#B89CFF] font-semibold uppercase tracking-widest">Paso 1 de 2</p>
          <h1 className="font-bold text-[#1F1F1F]">Elige fecha y hora</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 pb-36 space-y-5">
        {/* Service Summary */}
        <div className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm border border-black/[0.05]">
          <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1617553902331-b3e3c1aa07da?w=200&h=200&fit=crop&auto=format"
              alt="María González"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[#1F1F1F] text-sm">María González</h3>
            <div className="flex items-center gap-1 mt-0.5 mb-1">
              <Star size={11} className="text-[#F5B6C8] fill-[#F5B6C8]" />
              <span className="text-xs text-[#888]">4.8 · 1.2 km</span>
            </div>
            <p className="text-xs text-[#888]">Diseño Personalizado</p>
            <div className="flex items-center gap-3 mt-1">
              <span className="font-bold text-[#1F1F1F] text-sm">$50</span>
              <span className="text-xs text-[#bbb]">·</span>
              <div className="flex items-center gap-1">
                <Clock size={11} className="text-[#888]" />
                <span className="text-xs text-[#888]">75 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/[0.05]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#1F1F1F]">Mayo 2026</h3>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#F4F4F4' }}>
                <ChevronLeft size={16} className="text-[#1F1F1F]" />
              </button>
              <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#F4F4F4' }}>
                <ChevronRight size={16} className="text-[#1F1F1F]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {dates.map((d) => {
              const isSelected = selectedDate === d.date;
              const isToday = d.date === 14;
              return (
                <button
                  key={d.date}
                  onClick={() => setSelectedDate(d.date)}
                  className="flex flex-col items-center py-2.5 rounded-2xl transition-all"
                  style={isSelected
                    ? { background: '#1F1F1F', color: '#fff' }
                    : isToday
                      ? { background: 'rgba(245,182,200,0.2)', color: '#1F1F1F' }
                      : { background: 'transparent', color: '#555' }
                  }
                >
                  <span className="text-[10px] font-medium mb-1" style={{ opacity: isSelected ? 0.7 : 0.6 }}>{d.day}</span>
                  <span className="text-sm font-bold">{d.date}</span>
                  {isToday && !isSelected && (
                    <div className="w-1 h-1 rounded-full mt-1" style={{ background: '#F5B6C8' }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Slots */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/[0.05]">
          <h3 className="font-bold text-[#1F1F1F] mb-4">Horarios Disponibles</h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => {
              const isUnavail = unavailable.has(time);
              const isSelected = selectedTime === time;
              return (
                <button
                  key={time}
                  onClick={() => !isUnavail && setSelectedTime(time)}
                  disabled={isUnavail}
                  className="py-3 rounded-2xl text-sm font-semibold transition-all"
                  style={isUnavail
                    ? { background: '#F4F4F4', color: '#ccc', cursor: 'not-allowed' }
                    : isSelected
                      ? { background: '#1F1F1F', color: '#fff', boxShadow: '0 4px 12px rgba(31,31,31,0.2)' }
                      : { background: '#F4F4F4', color: '#1F1F1F' }
                  }
                >
                  {time}
                  {isUnavail && <div className="text-[10px] font-medium mt-0.5" style={{ color: '#ccc' }}>No disponible</div>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/[0.05]">
          <h3 className="font-bold text-[#1F1F1F] mb-3">Notas para la artista</h3>
          <textarea
            placeholder="Describe tu diseño ideal, referencias de colores, alergias..."
            className="w-full rounded-xl p-3 text-sm text-[#1F1F1F] outline-none resize-none placeholder:text-[#bbb] h-20"
            style={{ background: '#F4F4F4' }}
          />
        </div>

        {/* Summary */}
        <div className="rounded-2xl p-4 shadow-sm" style={{ background: 'linear-gradient(135deg, #FFF0F5 0%, #F5EEFF 100%)', border: '1.5px solid rgba(245,182,200,0.3)' }}>
          <h3 className="font-bold text-[#1F1F1F] mb-3">Resumen de tu cita</h3>
          <div className="space-y-2.5">
            {[
              { label: 'Fecha', value: 'Jueves 15 Mayo 2026' },
              { label: 'Hora', value: selectedTime },
              { label: 'Artista', value: 'María González' },
              { label: 'Servicio', value: 'Diseño Personalizado' },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between">
                <span className="text-sm text-[#888]">{label}</span>
                <span className="text-sm font-semibold text-[#1F1F1F]">{value}</span>
              </div>
            ))}
            <div className="flex justify-between pt-3 mt-1" style={{ borderTop: '1px solid rgba(245,182,200,0.4)' }}>
              <span className="font-bold text-[#1F1F1F]">Total</span>
              <span className="text-xl font-bold text-[#1F1F1F]">$50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.06] px-5 py-4">
        <button
          onClick={() => onNavigate('home-cliente')}
          className="w-full py-4 rounded-2xl font-bold text-white shadow-lg active:scale-[0.98] transition-transform"
          style={{ background: 'linear-gradient(135deg, #1F1F1F 0%, #3A2845 100%)' }}
        >
          Confirmar Cita — $50
        </button>
      </div>
    </div>
  );
}
