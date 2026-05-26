import { ChevronLeft, Camera, Plus, X, Save } from 'lucide-react';
import { useState } from 'react';

const portfolioPhotos = [
  'https://images.unsplash.com/photo-1648844421727-cde6c4246b13?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1684609365994-a144ee021c88?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1604654894611-6973b376cbde?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1572743686183-729b40b9230e?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1658051054903-a30911f121d3?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1674691412909-8405f0a19940?w=300&h=300&fit=crop&auto=format',
];

export default function PerfilManicuristaEdit({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [portfolio, setPortfolio] = useState([0, 1, 2, 3, 4, 5]);
  const [services, setServices] = useState([
    { name: 'Manicure Francesa', price: '35', duration: '45' },
    { name: 'Manicure con Gel', price: '45', duration: '60' },
    { name: 'Diseño Personalizado', price: '50', duration: '75' },
    { name: 'Uñas Acrílicas', price: '55', duration: '90' },
  ]);

  const addService = () => {
    setServices([...services, { name: '', price: '', duration: '' }]);
  };

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const updateService = (index: number, field: string, value: string) => {
    const updated = [...services];
    updated[index] = { ...updated[index], [field]: value };
    setServices(updated);
  };

  const inputStyle = {
    background: '#F4F4F4',
    borderRadius: 12,
    border: 'none',
    padding: '12px 14px',
    fontSize: 14,
    color: '#1F1F1F',
    width: '100%',
    outline: 'none',
    fontFamily: 'Poppins, sans-serif',
  };

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('dashboard-manicurista')}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#F4F4F4' }}>
              <ChevronLeft size={20} className="text-[#1F1F1F]" />
            </div>
            <h1 className="font-bold text-[#1F1F1F]">Editar Perfil</h1>
          </button>

          <button
            onClick={() => onNavigate('dashboard-manicurista')}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm active:scale-[0.97] transition-transform"
            style={{ background: 'linear-gradient(135deg, #1F1F1F, #3A2845)', color: '#fff' }}
          >
            <Save size={15} />
            Guardar
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-8">
        {/* Profile Photo */}
        <div className="bg-white border-b border-black/[0.06] p-6">
          <div className="flex items-start gap-5 mb-5">
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden" style={{ border: '3px solid #F5B6C8' }}>
                <img
                  src="https://images.unsplash.com/photo-1617553902331-b3e3c1aa07da?w=200&h=200&fit=crop&auto=format"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
                style={{ background: '#1F1F1F', border: '2px solid white' }}
              >
                <Camera size={14} className="text-white" />
              </button>
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#1F1F1F] mb-1.5">Nombre</label>
                <input type="text" defaultValue="María González" style={inputStyle} />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1F1F1F] mb-1.5">Ubicación</label>
                <input type="text" defaultValue="Ciudad de México" style={inputStyle} />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#1F1F1F] mb-1.5">Biografía</label>
            <textarea
              defaultValue="Manicurista profesional con 5 años de experiencia. Especialista en diseños personalizados y nail art."
              style={{ ...inputStyle, height: 88, resize: 'none' }}
            />
          </div>
        </div>

        {/* Portfolio */}
        <div className="bg-white border-b border-black/[0.06] p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#1F1F1F]">Portafolio</h3>
            <button
              onClick={() => setPortfolio([...portfolio, portfolio.length])}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold active:scale-[0.97] transition-transform"
              style={{ background: 'rgba(245,182,200,0.2)', color: '#1F1F1F', border: '1.5px solid #F5B6C8' }}
            >
              <Plus size={13} />
              Agregar foto
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {portfolio.map((item, index) => (
              <div key={item} className="relative group aspect-square">
                <div className="w-full h-full rounded-xl overflow-hidden bg-[#F4F4F4]">
                  {portfolioPhotos[index % portfolioPhotos.length] ? (
                    <img
                      src={portfolioPhotos[index % portfolioPhotos.length]}
                      alt={`portfolio ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Camera size={22} className="text-[#ccc]" />
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setPortfolio(portfolio.filter((_, i) => i !== index))}
                  className="absolute top-1 right-1 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                  style={{ background: '#1F1F1F' }}
                >
                  <X size={12} className="text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-white p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#1F1F1F]">Servicios</h3>
            <button
              onClick={addService}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold active:scale-[0.97] transition-transform"
              style={{ background: 'rgba(220,198,255,0.25)', color: '#1F1F1F', border: '1.5px solid #DCC6FF' }}
            >
              <Plus size={13} />
              Agregar
            </button>
          </div>

          <div className="space-y-3">
            {services.map((service, i) => (
              <div key={i} className="rounded-2xl p-4 relative" style={{ background: '#F4F4F4' }}>
                <button
                  onClick={() => removeService(i)}
                  className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.08)' }}
                >
                  <X size={13} className="text-[#888]" />
                </button>

                <div className="space-y-2.5 pr-8">
                  <div>
                    <label className="block text-[10px] font-bold text-[#888] mb-1 uppercase tracking-wide">Nombre</label>
                    <input
                      type="text"
                      value={service.name}
                      onChange={(e) => updateService(i, 'name', e.target.value)}
                      placeholder="Ej: Manicure Francesa"
                      style={{ ...inputStyle, background: '#fff', fontSize: 13 }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-[#888] mb-1 uppercase tracking-wide">Precio ($)</label>
                      <input
                        type="number"
                        value={service.price}
                        onChange={(e) => updateService(i, 'price', e.target.value)}
                        placeholder="35"
                        style={{ ...inputStyle, background: '#fff', fontSize: 13 }}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-[#888] mb-1 uppercase tracking-wide">Duración (min)</label>
                      <input
                        type="number"
                        value={service.duration}
                        onChange={(e) => updateService(i, 'duration', e.target.value)}
                        placeholder="45"
                        style={{ ...inputStyle, background: '#fff', fontSize: 13 }}
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
