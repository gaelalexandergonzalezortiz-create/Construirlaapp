import { ChevronLeft, SlidersHorizontal, Star, MapPin, Clock } from 'lucide-react';

const artistPhotos = [
  'https://images.unsplash.com/photo-1617553902331-b3e3c1aa07da?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1734821331651-7e4a47793566?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1754683378256-4b17627097d0?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/flagged/photo-1579983800445-887383059236?w=200&h=200&fit=crop&auto=format',
];

export default function ManicuristaList({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const manicuristas = [
    { name: 'María González', rating: '4.8', reviews: 124, price: '$35', distance: '1.2 km', specialty: ['Francesa', 'Gel'], avail: '2pm - 6pm' },
    { name: 'Ana Martínez', rating: '4.9', reviews: 89, price: '$40', distance: '2.5 km', specialty: ['Diseños', 'Acrílicas'], avail: '10am - 4pm' },
    { name: 'Sofía López', rating: '4.7', reviews: 67, price: '$30', distance: '3.1 km', specialty: ['Gel', 'Nail Art'], avail: '12pm - 7pm' },
    { name: 'Laura Hernández', rating: '4.8', reviews: 103, price: '$38', distance: '4.0 km', specialty: ['Francesa', 'Spa'], avail: '9am - 3pm' },
    { name: 'Pixie.Hades.Nails', rating: '4.9', reviews: 212, price: '$45', distance: '5.2 km', specialty: ['Diseños', 'Glitter'], avail: '11am - 6pm' },
  ];

  const filterChips = ['Mejor valoradas', 'Más cercanas', 'Disponible hoy', 'Gel', 'Francesa'];

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => onNavigate('nail-builder')}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: '#F4F4F4' }}
          >
            <ChevronLeft size={20} className="text-[#1F1F1F]" />
          </button>
          <div className="text-center">
            <h1 className="font-bold text-[#1F1F1F]">Manicuristas</h1>
            <p className="text-xs text-[#888]">{manicuristas.length} disponibles cerca</p>
          </div>
          <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#F4F4F4' }}>
            <SlidersHorizontal size={18} className="text-[#1F1F1F]" />
          </button>
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {filterChips.map((chip, i) => (
            <button
              key={chip}
              className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all"
              style={i === 0
                ? { background: '#1F1F1F', color: '#fff' }
                : { background: '#F4F4F4', color: '#555' }
              }
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
        {manicuristas.map((m, i) => (
          <button
            key={i}
            onClick={() => onNavigate('manicurista-profile')}
            className="w-full bg-white rounded-2xl p-4 flex gap-4 text-left shadow-sm border border-black/[0.05] active:scale-[0.99] transition-transform"
          >
            {/* Photo */}
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#F4F4F4] flex-shrink-0">
              {artistPhotos[i] ? (
                <img src={artistPhotos[i]} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F5B6C8, #DCC6FF)' }}>
                  <span className="text-white text-2xl font-bold">{m.name[0]}</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-bold text-[#1F1F1F] text-sm leading-tight">{m.name}</h3>
                <span className="font-bold text-[#1F1F1F] text-sm ml-2 flex-shrink-0">{m.price}</span>
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex items-center gap-0.5">
                  <Star size={11} className="text-[#F5B6C8] fill-[#F5B6C8]" />
                  <span className="text-xs font-semibold text-[#1F1F1F]">{m.rating}</span>
                  <span className="text-xs text-[#bbb]"> ({m.reviews})</span>
                </div>
                <span className="text-[#ddd]">·</span>
                <div className="flex items-center gap-0.5">
                  <MapPin size={11} className="text-[#888]" />
                  <span className="text-xs text-[#888]">{m.distance}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-2">
                {m.specialty.map((s) => (
                  <span key={s} className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: 'rgba(220,198,255,0.25)', color: '#1F1F1F' }}>
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1">
                <Clock size={11} className="text-[#B89CFF]" />
                <span className="text-[10px] text-[#888]">Hoy: {m.avail}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
