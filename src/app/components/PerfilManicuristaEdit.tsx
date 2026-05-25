import { ChevronLeft, Camera, Plus, X } from 'lucide-react';
import { useState } from 'react';

export default function PerfilManicuristaEdit({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [portfolio, setPortfolio] = useState([1, 2, 3, 4, 5, 6]);
  const [services, setServices] = useState([
    { name: 'Manicure Francesa', price: '35', duration: '45' },
    { name: 'Manicure con Gel', price: '45', duration: '60' },
    { name: 'Diseño Personalizado', price: '50', duration: '75' },
    { name: 'Uñas Acrílicas', price: '55', duration: '90' },
  ]);

  const [showAddService, setShowAddService] = useState(false);

  const addService = () => {
    setServices([...services, { name: '', price: '', duration: '' }]);
    setShowAddService(false);
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const updateService = (index: number, field: string, value: string) => {
    const updated = [...services];
    updated[index] = { ...updated[index], [field]: value };
    setServices(updated);
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-300 p-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={() => onNavigate('dashboard-manicurista')} className="flex items-center gap-2">
            <ChevronLeft size={24} className="text-gray-800" />
            <h1 className="text-xl font-bold text-gray-800">Editar Perfil</h1>
          </button>
          <button
            onClick={() => onNavigate('dashboard-manicurista')}
            className="bg-gray-800 text-white px-4 py-2 border-2 border-gray-900 text-sm"
          >
            Guardar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-6">
        {/* Profile Photo */}
        <div className="bg-white border-b-2 border-gray-300 p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-24 h-24 bg-gray-300 flex items-center justify-center">
                <div className="text-5xl text-gray-500">×</div>
              </div>
              <button className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 border-2 border-gray-900">
                <Camera size={16} />
              </button>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-800 mb-1">Nombre</label>
              <input
                type="text"
                defaultValue="María González"
                className="w-full border-2 border-gray-300 p-2 text-gray-800"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-bold text-gray-800 mb-1">Biografía</label>
            <textarea
              defaultValue="Manicurista profesional con 5 años de experiencia. Especialista en diseños personalizados y nail art."
              className="w-full border-2 border-gray-300 p-3 h-24 text-gray-800"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-bold text-gray-800 mb-1">Ubicación</label>
            <input
              type="text"
              defaultValue="Ciudad de México"
              className="w-full border-2 border-gray-300 p-2 text-gray-800"
            />
          </div>
        </div>

        {/* Portfolio */}
        <div className="bg-white border-b-2 border-gray-300 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Portafolio</h3>
            <button
              onClick={() => setPortfolio([...portfolio, portfolio.length + 1])}
              className="bg-gray-800 text-white px-3 py-1 border-2 border-gray-900 text-sm flex items-center gap-1"
            >
              <Plus size={16} />
              Agregar
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {portfolio.map((item, index) => (
              <div key={item} className="relative group">
                <div className="bg-gray-300 border-2 border-gray-400 aspect-square flex items-center justify-center">
                  <Camera size={24} className="text-gray-500" />
                </div>
                <button
                  onClick={() => setPortfolio(portfolio.filter((_, i) => i !== index))}
                  className="absolute top-1 right-1 bg-gray-800 text-white p-1 border border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">Servicios</h3>
            <button
              onClick={addService}
              className="bg-gray-800 text-white px-3 py-1 border-2 border-gray-900 text-sm flex items-center gap-1"
            >
              <Plus size={16} />
              Agregar
            </button>
          </div>

          <div className="space-y-3">
            {services.map((service, i) => (
              <div key={i} className="border-2 border-gray-300 p-4 relative">
                <button
                  onClick={() => removeService(i)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                  <X size={18} />
                </button>

                <div className="space-y-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Nombre del servicio</label>
                    <input
                      type="text"
                      value={service.name}
                      onChange={(e) => updateService(i, 'name', e.target.value)}
                      className="w-full border border-gray-300 p-2 text-gray-800"
                      placeholder="Ej: Manicure Francesa"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Precio ($)</label>
                      <input
                        type="number"
                        value={service.price}
                        onChange={(e) => updateService(i, 'price', e.target.value)}
                        className="w-full border border-gray-300 p-2 text-gray-800"
                        placeholder="35"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Duración (min)</label>
                      <input
                        type="number"
                        value={service.duration}
                        onChange={(e) => updateService(i, 'duration', e.target.value)}
                        className="w-full border border-gray-300 p-2 text-gray-800"
                        placeholder="45"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
