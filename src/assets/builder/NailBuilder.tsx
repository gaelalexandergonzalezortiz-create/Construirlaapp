import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

export default function NailBuilder({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selected, setSelected] = useState({
    forma: 'Almendrada',
    largo: 'Medio',
    color: 'Rosa',
    decoracion: 'Francesa'
  });

  const options = {
    forma: ['Cuadrada', 'Almendrada', 'Ovalada', 'Stiletto'],
    largo: ['Corto', 'Medio', 'Largo', 'XL'],
    color: ['Rosa', 'Nude', 'Rojo', 'Negro'],
    decoracion: ['Francesa', 'Glitter', 'Minimal', 'Floral']
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <div className="bg-white border-b border-gray-300 px-5 py-4 flex items-center gap-4">
        <button onClick={() => onNavigate('home-cliente')}>
          <ChevronLeft size={24} className="text-gray-900" />
        </button>
        <div>
          <p className="text-xs text-gray-500">Custom Builder</p>
          <h1 className="font-bold text-gray-900">Diseña tus uñas</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 pb-36 space-y-6">
        <div className="bg-white rounded-3xl border border-gray-300 aspect-[4/5] flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="text-8xl">×</div>
            <p className="text-sm">Preview del diseño</p>
          </div>
        </div>

        {Object.entries(options).map(([key, values]) => (
          <div key={key} className="space-y-3">
            <h3 className="font-semibold capitalize text-gray-900">{key}</h3>

            <div className="flex flex-wrap gap-2">
              {values.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelected({ ...selected, [key]: option })}
                  className={`px-4 py-2 rounded-full border text-sm ${
                    selected[key as keyof typeof selected] === option
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-700 border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-5 py-4">
        <div className="max-w-md mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500">Precio estimado</p>
            <h2 className="text-2xl font-bold text-gray-900">$45</h2>
          </div>

          <button
            onClick={() => onNavigate('manicurista-list')}
            className="flex-1 rounded-2xl bg-gray-900 text-white py-4 font-semibold"
          >
            Buscar Artista
          </button>
        </div>
      </div>
    </div>
  );
}
