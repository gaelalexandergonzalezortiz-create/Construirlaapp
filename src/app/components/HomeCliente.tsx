import { Search, Sparkles, Home, User, Calendar, MessageSquare, Bell, ChevronRight } from 'lucide-react';

const nailPhotos = [
  'https://images.unsplash.com/photo-1648844421727-cde6c4246b13?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1684609365994-a144ee021c88?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1604654894611-6973b376cbde?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1572743686183-729b40b9230e?w=300&h=300&fit=crop&auto=format',
];

const artistPhotos = [
  'https://images.unsplash.com/photo-1617553902331-b3e3c1aa07da?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1734821331651-7e4a47793566?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1754683378256-4b17627097d0?w=200&h=200&fit=crop&auto=format',
];

const categories = ['Todos', 'Gel', 'Francesa', 'Acrílicas', 'Diseños', 'Spa'];

export default function HomeCliente({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const manicuristas = [
    { name: 'María González', rating: '4.8', price: '$25-$40', specialty: 'Gel & Francesa', dist: '1.2 km', reviews: 124 },
    { name: 'Ana Martínez', rating: '4.9', price: '$30-$55', specialty: 'Diseños & Acrílicas', dist: '2.5 km', reviews: 89 },
    { name: 'Sofía López', rating: '4.7', price: '$20-$35', specialty: 'Nail Art', dist: '3.1 km', reviews: 67 },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white px-5 pt-6 pb-4 space-y-4 border-b border-black/[0.06]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#888] font-medium">Buenos días ✨</p>
            <h1 className="text-xl font-bold text-[#1F1F1F]">Ana Rodríguez</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#F4F4F4' }}>
              <Bell size={18} className="text-[#1F1F1F]" />
            </button>
            <button onClick={() => onNavigate('perfil-cliente')} className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#F5B6C8]">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format" alt="perfil" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#aaa]" size={17} />
          <input
            type="text"
            placeholder="Buscar manicuristas, estilos..."
            className="w-full rounded-2xl py-3 pl-11 pr-4 text-sm font-medium text-[#1F1F1F] outline-none placeholder:text-[#bbb]"
            style={{ background: '#F4F4F4' }}
          />
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Categories */}
        <div className="flex gap-2 px-5 py-4 overflow-x-auto">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={i === 0
                ? { background: '#1F1F1F', color: '#fff' }
                : { background: 'rgba(245,182,200,0.15)', color: '#1F1F1F', border: '1px solid rgba(245,182,200,0.35)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Design Your Nails CTA */}
        <div className="px-5 mb-6">
          <button
            onClick={() => onNavigate('nail-builder')}
            className="w-full rounded-3xl p-5 flex items-center justify-between active:scale-[0.98] transition-transform shadow-md overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, #1F1F1F 0%, #2E2E2E 50%, #3D2A45 100%)' }}
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,182,200,0.25) 0%, transparent 70%)', transform: 'translate(20%, -30%)' }} />

            <div className="text-left relative z-10">
              <p className="text-[#F5B6C8] text-xs font-semibold mb-0.5 uppercase tracking-widest">Comienza aquí</p>
              <h2 className="text-white text-2xl font-bold leading-tight">Diseña Mis Uñas</h2>
              <p className="text-white/60 text-xs mt-1">Crea tu diseño personalizado</p>
            </div>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10" style={{ background: 'rgba(245,182,200,0.2)' }}>
              <Sparkles size={28} className="text-[#F5B6C8]" />
            </div>
          </button>
        </div>

        {/* Trending Designs */}
        <div className="px-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-[#1F1F1F]">Diseños Trending</h2>
            <button className="text-xs font-semibold text-[#B89CFF] flex items-center gap-0.5">Ver más <ChevronRight size={14} /></button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1">
            {nailPhotos.map((photo, i) => (
              <div key={i} className="flex-shrink-0 w-36 rounded-2xl overflow-hidden shadow-sm border border-black/[0.05]">
                <div className="w-36 h-36 bg-[#F4F4F4]">
                  <img src={photo} alt={`diseño ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="bg-white p-2">
                  <p className="text-xs font-semibold text-[#1F1F1F]">{['Rosa Glitter', 'Nude Minimalista', 'Francesa Clásica', 'Gel Brillante'][i]}</p>
                  <p className="text-[10px] text-[#aaa] font-medium">{['desde $35', 'desde $30', 'desde $25', 'desde $40'][i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Artists */}
        <div className="px-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-[#1F1F1F]">Top Nail Artists</h2>
            <button
              onClick={() => onNavigate('manicurista-list')}
              className="text-xs font-semibold text-[#B89CFF] flex items-center gap-0.5"
            >
              Ver todas <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-3">
            {manicuristas.map((m, i) => (
              <button
                key={i}
                onClick={() => onNavigate('manicurista-profile')}
                className="w-full bg-white rounded-2xl p-4 flex gap-4 text-left shadow-sm border border-black/[0.05] active:scale-[0.99] transition-transform"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#F4F4F4] flex-shrink-0">
                  {artistPhotos[i] ? (
                    <img src={artistPhotos[i]} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F5B6C8, #DCC6FF)' }}>
                      <span className="text-white text-xl font-bold">{m.name[0]}</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-[#1F1F1F] text-sm">{m.name}</h3>
                    <span className="text-sm font-bold text-[#1F1F1F]">{m.price}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[#F5B6C8]">★</span>
                    <span className="text-xs font-semibold text-[#1F1F1F]">{m.rating}</span>
                    <span className="text-xs text-[#bbb]">({m.reviews})</span>
                  </div>
                  <p className="text-xs text-[#888] mt-0.5">{m.dist} • {m.specialty}</p>

                  <div className="flex gap-1.5 mt-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: 'rgba(245,182,200,0.2)', color: '#1F1F1F' }}>Disponible hoy</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.06] px-6 py-2 pb-safe">
        <div className="max-w-sm mx-auto flex justify-around">
          {[
            { icon: Home, label: 'Home', screen: 'home-cliente', active: true },
            { icon: Calendar, label: 'Citas', screen: 'citas-cliente', active: false },
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
