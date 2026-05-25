import { Search, Sparkles, Home, User, Calendar, MessageSquare } from 'lucide-react';

export default function HomeCliente({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const popularDesigns = [1, 2, 3, 4];
  const manicuristas = [
    { name: 'María González', rating: '4.8', price: '$25-$40' },
    { name: 'Ana Martínez', rating: '4.9', price: '$30-$55' },
    { name: 'Sofia López', rating: '4.7', price: '$20-$35' },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <div className="bg-white border-b border-gray-300 px-5 pt-6 pb-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Bienvenida</p>
            <h1 className="text-2xl font-bold text-gray-900">Nail Match</h1>
          </div>
          <button onClick={() => onNavigate('perfil-cliente')} className="w-10 h-10 rounded-full border-2 border-gray-300"></button>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar manicuristas"
            className="w-full rounded-2xl border border-gray-300 bg-gray-50 py-3 pl-11 pr-4 text-sm"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 pb-28 space-y-7">
        <button
          onClick={() => onNavigate('nail-builder')}
          className="w-full rounded-3xl border-2 border-gray-800 bg-gray-900 text-white px-6 py-6 flex items-center justify-between"
        >
          <div className="text-left">
            <p className="text-xs opacity-70">Comienza aquí</p>
            <h2 className="text-xl font-bold">Diseñar Mis Uñas</h2>
          </div>
          <Sparkles size={28} />
        </button>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">Diseños Trending</h2>
            <span className="text-sm text-gray-500">Ver más</span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-1">
            {popularDesigns.map((design) => (
              <div
                key={design}
                className="min-w-32 h-32 rounded-2xl border border-gray-300 bg-white flex items-center justify-center"
              >
                <span className="text-5xl text-gray-300">×</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">Top Nail Artists</h2>
            <span className="text-sm text-gray-500">Filtrar</span>
          </div>

          <div className="space-y-4">
            {manicuristas.map((m, i) => (
              <button
                key={i}
                onClick={() => onNavigate('manicurista-profile')}
                className="w-full rounded-3xl border border-gray-300 bg-white p-4 flex gap-4 text-left"
              >
                <div className="w-20 h-20 rounded-2xl bg-gray-200 flex items-center justify-center shrink-0">
                  <span className="text-4xl text-gray-400">×</span>
                </div>

                <div className="flex-1 space-y-1">
                  <h3 className="font-bold text-gray-900">{m.name}</h3>
                  <p className="text-sm text-gray-500">⭐ {m.rating}</p>
                  <p className="text-sm text-gray-500">2 km • Acrylic & Gel</p>
                  <p className="font-semibold text-gray-800">{m.price}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-6 py-3">
        <div className="max-w-md mx-auto flex justify-between">
          <button className="flex flex-col items-center text-gray-900">
            <Home size={22} />
            <span className="text-xs">Home</span>
          </button>

          <button onClick={() => onNavigate('citas-cliente')} className="flex flex-col items-center text-gray-500">
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
