import { ChevronLeft, ChevronRight, Plus, Clock, User, TrendingUp, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function CalendarioManicurista({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selectedDate, setSelectedDate] = useState(15);

  const dates = [
    { day: 'Lun', date: 12 },
    { day: 'Mar', date: 13 },
    { day: 'Mié', date: 14 },
    { day: 'Jue', date: 15 },
    { day: 'Vie', date: 16 },
    { day: 'Sáb', date: 17 },
    { day: 'Dom', date: 18 },
  ];

  const citasPorFecha: { [key: number]: { hora: string; cliente: string; servicio: string; duracion: string; precio: string }[] } = {
    15: [
      { hora: '10:00 AM', cliente: 'Ana Pérez', servicio: 'Manicure Francesa', duracion: '45 min', precio: '$35' },
      { hora: '11:00 AM', cliente: 'Laura Sánchez', servicio: 'Diseño Personalizado', duracion: '75 min', precio: '$50' },
      { hora: '2:00 PM', cliente: 'Carmen Díaz', servicio: 'Uñas Acrílicas', duracion: '90 min', precio: '$55' },
      { hora: '4:00 PM', cliente: 'Sofía Torres', servicio: 'Manicure con Gel', duracion: '60 min', precio: '$45' },
    ],
    16: [
      { hora: '9:00 AM', cliente: 'María López', servicio: 'Manicure Francesa', duracion: '45 min', precio: '$35' },
      { hora: '12:00 PM', cliente: 'Rosa Martínez', servicio: 'Diseño Personalizado', duracion: '75 min', precio: '$50' },
    ],
  };

  const citasDelDia = citasPorFecha[selectedDate] || [];
  const totalEarnings = citasDelDia.reduce((s, c) => s + parseInt(c.precio.replace('$', '')), 0);
  const totalMin = citasDelDia.reduce((s, c) => s + parseInt(c.duracion), 0);

  const avatarColors = [
    'linear-gradient(135deg,#F5B6C8,#DCC6FF)',
    'linear-gradient(135deg,#DCC6FF,#B89CFF)',
    'linear-gradient(135deg,#FFD6E7,#F5B6C8)',
    'linear-gradient(135deg,#B89CFF,#DCC6FF)',
  ];

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('dashboard-manicurista')} className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#F4F4F4' }}>
              <ChevronLeft size={20} className="text-[#1F1F1F]" />
            </div>
            <h1 className="font-bold text-[#1F1F1F]">Mi Agenda</h1>
          </button>
          <button
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold active:scale-[0.97] transition-transform"
            style={{ background: 'rgba(245,182,200,0.2)', color: '#1F1F1F', border: '1.5px solid #F5B6C8' }}
          >
            <Plus size={13} />
            Bloquear
          </button>
        </div>

        {/* Month nav */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-[#1F1F1F]">Mayo 2026</h3>
          <div className="flex gap-1.5">
            <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#F4F4F4' }}>
              <ChevronLeft size={15} className="text-[#1F1F1F]" />
            </button>
            <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#F4F4F4' }}>
              <ChevronRight size={15} className="text-[#1F1F1F]" />
            </button>
          </div>
        </div>

        {/* Date Row */}
        <div className="grid grid-cols-7 gap-1">
          {dates.map((d) => {
            const isSelected = selectedDate === d.date;
            const hasCitas = !!citasPorFecha[d.date];
            return (
              <button
                key={d.date}
                onClick={() => setSelectedDate(d.date)}
                className="flex flex-col items-center py-2.5 rounded-2xl transition-all"
                style={isSelected
                  ? { background: '#1F1F1F', color: '#fff' }
                  : { background: 'transparent', color: '#555' }
                }
              >
                <span className="text-[10px] font-medium mb-1" style={{ opacity: isSelected ? 0.65 : 0.6 }}>{d.day}</span>
                <span className="text-sm font-bold">{d.date}</span>
                {hasCitas && (
                  <div className="w-1.5 h-1.5 rounded-full mt-1" style={{ background: isSelected ? '#F5B6C8' : '#B89CFF' }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-black/[0.06] px-5 py-3">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: User, val: `${citasDelDia.length}`, label: 'Citas' },
            { icon: DollarSign, val: `$${totalEarnings}`, label: 'Ingresos' },
            { icon: Clock, val: `${totalMin}m`, label: 'Total' },
          ].map(({ icon: Icon, val, label }, i) => (
            <div key={i} className="rounded-2xl px-3 py-2.5 flex items-center gap-2" style={{ background: '#F4F4F4' }}>
              <Icon size={16} className="text-[#B89CFF] flex-shrink-0" />
              <div>
                <p className="font-bold text-[#1F1F1F] text-sm leading-tight">{val}</p>
                <p className="text-[10px] text-[#888]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointments */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {citasDelDia.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ background: '#F4F4F4' }}>
              <Clock size={32} className="text-[#DCC6FF]" />
            </div>
            <h3 className="font-bold text-[#1F1F1F] mb-1">Sin citas este día</h3>
            <p className="text-sm text-[#888]">Disfruta tu día libre ✨</p>
          </div>
        ) : (
          citasDelDia.map((cita, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-black/[0.05]">
              <div className="flex gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0" style={{ background: avatarColors[i % 4] }}>
                  {cita.cliente[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-[#1F1F1F] text-sm">{cita.cliente}</h3>
                      <p className="text-xs text-[#888]">{cita.servicio}</p>
                    </div>
                    <span className="font-bold text-[#1F1F1F] text-sm">{cita.precio}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <div className="flex items-center gap-1">
                      <Clock size={11} className="text-[#B89CFF]" />
                      <span className="text-xs font-semibold text-[#1F1F1F]">{cita.hora}</span>
                    </div>
                    <span className="text-xs text-[#bbb]">·</span>
                    <span className="text-xs text-[#888]">{cita.duracion}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-[#888]" style={{ background: '#F4F4F4' }}>
                  Cancelar
                </button>
                <button className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-[#888]" style={{ background: '#F4F4F4' }}>
                  Reprogramar
                </button>
                <button
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #1F1F1F, #3A2845)' }}
                >
                  Completar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
