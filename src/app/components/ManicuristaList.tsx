import { ChevronLeft, SlidersHorizontal } from 'lucide-react';

export default function ManicuristaList({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const manicuristas = [
    { name: 'María González', rating: '4.8', price: '$35', distance: '1.2 km' },
    { name: 'Ana Martínez', rating: '4.9', price: '$35', distance: '2.5 km' },
    { name: 'Sofia López', rating: '4.7', price: '$35', distance: '3.1 km' },
    { name: 'Laura Hernández', rating: '4.8', price: '$35', distance: '4.0 km' },
    { name: 'Pixie.Hades.Nails', rating: '4.9', price: '$35', distance: '5.2 km' },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-300 p-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('nail-builder')} className="flex items-center gap-2">
            <ChevronLeft size={24} className="text-gray-800" />
            <h1 className="text-xl font-bold text-gray-800">Manicuristas</h1>
          </button>
          <button className="p-2 border-2 border-gray-300">
            <SlidersHorizontal size={20} className="text-gray-800" />
          </button>
        </div>

        <p className="text-gray-600">{manicuristas.length} manicuristas disponibles</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {manicuristas.map((m, i) => (
            <button
              key={i}
              onClick={() => onNavigate('manicurista-profile')}
              className="w-full bg-white border-2 border-gray-300 p-4 hover:border-gray-800 transition-colors"
            >
              <div className="flex gap-4">
                {/* Photo Placeholder */}
                <div className="w-20 h-20 bg-gray-300 flex items-center justify-center flex-shrink-0">
                  <div className="text-4xl text-gray-500">×</div>
                </div>

                {/* Info */}
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-gray-800 mb-1">{m.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-600">★ {m.rating}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{m.distance}</span>
                  </div>
                  <p className="text-gray-800 font-bold">{m.price}</p>

                  {/* Specialties */}
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 border border-gray-300">Francesa</span>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 border border-gray-300">Degradado</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <div className="w-6 h-6 border-2 border-gray-400 flex items-center justify-center">
                    <span className="text-gray-400">›</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">Disponible hoy: 2pm - 6pm</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
