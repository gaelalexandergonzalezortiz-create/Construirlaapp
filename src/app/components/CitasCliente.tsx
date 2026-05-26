import { Home, Calendar, MessageSquare, User, Clock, MapPin, ChevronRight, Star } from 'lucide-react';

const artistPhotos = [
  'https://images.unsplash.com/photo-1617553902331-b3e3c1aa07da?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1734821331651-7e4a47793566?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1754683378256-4b17627097d0?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
];

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
      ubicacion: '1.2 km',
      photoIdx: 0,
    },
    {
      manicurista: 'Ana Martínez',
      servicio: 'Manicure Francesa',
      fecha: 'Viernes',
      dia: 'Viernes 16 Mayo',
      hora: '4:00 PM',
      duracion: '45 min',
      precio: '$35',
      ubicacion: '2.5 km',
      photoIdx: 1,
    },
  ];

  const citasPasadas = [
    { manicurista: 'Sofía López', servicio: 'Uñas Acrílicas', dia: 'Lunes 12 Mayo', hora: '3:00 PM', precio: '$55', photoIdx: 2, rating: 5 },
    { manicurista: 'María González', servicio: 'Manicure con Gel', dia: 'Miércoles 7 Mayo', hora: '11:00 AM', precio: '$45', photoIdx: 3, rating: 5 },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 pt-6 pb-4">
        <h1 className="text-xl font-bold text-[#1F1F1F] mb-0.5">Mis Citas</h1>
        <p className="text-xs text-[#888]">Gestiona tus reservaciones</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 pb-28 space-y-6">
        {/* Próximas Citas */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-[#1F1F1F] text-sm">Próximas Citas</h2>
            <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(245,182,200,0.2)', color: '#1F1F1F' }}>
              {citasProximas.length} pendientes
            </span>
          </div>
          <div className="space-y-3">
            {citasProximas.map((cita, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-black/[0.05] overflow-hidden">
                {/* Top accent stripe */}
                <div className="h-1" style={{ background: 'linear-gradient(90deg, #F5B6C8, #DCC6FF)' }} />

                <div className="p-4">
                  <div className="flex gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 bg-[#F4F4F4]">
                      <img src={artistPhotos[cita.photoIdx]} alt={cita.manicurista} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3 className="font-bold text-[#1F1F1F] text-sm">{cita.manicurista}</h3>
                        <span
                          className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                          style={cita.fecha === 'Mañana'
                            ? { background: 'rgba(184,156,255,0.2)', color: '#1F1F1F' }
                            : { background: '#F4F4F4', color: '#888' }
                          }
                        >
                          {cita.fecha}
                        </span>
                      </div>
                      <p className="text-xs text-[#888] mt-0.5">{cita.servicio}</p>
                      <p className="font-bold text-[#1F1F1F] text-sm mt-1">{cita.precio}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { icon: Calendar, text: cita.dia.split(' ').slice(0, 2).join(' ') },
                      { icon: Clock, text: `${cita.hora} · ${cita.duracion}` },
                      { icon: MapPin, text: cita.ubicacion },
                    ].map(({ icon: Icon, text }, j) => (
                      <div key={j} className="flex items-center gap-1">
                        <Icon size={11} className="text-[#B89CFF] flex-shrink-0" />
                        <span className="text-[10px] text-[#888] truncate">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-[#888]" style={{ background: '#F4F4F4' }}>
                      Cancelar
                    </button>
                    <button
                      onClick={() => onNavigate('manicurista-profile')}
                      className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #1F1F1F, #3A2845)' }}
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historial */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-[#1F1F1F] text-sm">Historial</h2>
            <button className="text-xs font-semibold text-[#B89CFF]">Ver todo</button>
          </div>
          <div className="space-y-2">
            {citasPasadas.map((cita, i) => (
              <button
                key={i}
                onClick={() => onNavigate('manicurista-profile')}
                className="w-full bg-white rounded-2xl border border-black/[0.05] p-3 flex items-center gap-3 text-left shadow-sm active:scale-[0.99] transition-transform"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#F4F4F4] flex-shrink-0">
                  <img src={artistPhotos[cita.photoIdx]} alt={cita.manicurista} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1F1F1F] text-sm">{cita.manicurista}</h3>
                  <p className="text-xs text-[#888]">{cita.servicio}</p>
                  <p className="text-[10px] text-[#bbb] mt-0.5">{cita.dia} · {cita.hora}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-[#1F1F1F] text-sm">{cita.precio}</p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: cita.rating }).map((_, j) => (
                      <Star key={j} size={9} className="text-[#F5B6C8] fill-[#F5B6C8]" />
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.06] px-6 py-2">
        <div className="max-w-sm mx-auto flex justify-around">
          {[
            { icon: Home, label: 'Home', screen: 'home-cliente', active: false },
            { icon: Calendar, label: 'Citas', screen: 'citas-cliente', active: true },
            { icon: MessageSquare, label: 'Chat', screen: 'mensajes-cliente', active: false },
            { icon: User, label: 'Perfil', screen: 'perfil-cliente', active: false },
          ].map(({ icon: Icon, label, screen, active }) => (
            <button key={label} onClick={() => onNavigate(screen)} className="flex flex-col items-center gap-0.5 py-1">
              <Icon size={22} className={active ? 'text-[#B89CFF]' : 'text-[#ccc]'} />
              <span className={`text-[10px] font-semibold ${active ? 'text-[#B89CFF]' : 'text-[#ccc]'}`}>{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
