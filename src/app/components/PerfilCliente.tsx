import { Home, Calendar, MessageSquare, User, ChevronRight, Camera, Settings, LogOut, CreditCard, Bell, Shield } from 'lucide-react';

const artistPhotos = [
  'https://images.unsplash.com/photo-1617553902331-b3e3c1aa07da?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1734821331651-7e4a47793566?w=200&h=200&fit=crop&auto=format',
];

export default function PerfilCliente({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const favoritos = [
    { nombre: 'María González', rating: '4.8', servicios: '12 servicios', photoIdx: 0 },
    { nombre: 'Ana Martínez', rating: '4.9', servicios: '8 servicios', photoIdx: 1 },
  ];

  const settingsItems = [
    { icon: Settings, label: 'Editar Perfil', desc: 'Nombre, foto, datos personales' },
    { icon: CreditCard, label: 'Métodos de Pago', desc: 'Tarjetas y métodos guardados' },
    { icon: Bell, label: 'Notificaciones', desc: 'Alertas y recordatorios' },
    { icon: Shield, label: 'Privacidad', desc: 'Seguridad y datos' },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 pt-6 pb-4">
        <h1 className="text-xl font-bold text-[#1F1F1F]">Mi Perfil</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-28">
        {/* Profile Info */}
        <div className="bg-white border-b border-black/[0.06] px-5 py-6">
          <div className="flex items-center gap-5 mb-5">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden" style={{ border: '3px solid #F5B6C8' }}>
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format"
                  alt="Ana Rodríguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className="absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center shadow-md"
                style={{ background: '#1F1F1F', border: '2px solid white' }}
              >
                <Camera size={12} className="text-white" />
              </button>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1F1F1F]">Ana Rodríguez</h2>
              <p className="text-xs text-[#888]">ana.rodriguez@email.com</p>
              <div className="flex items-center gap-1 mt-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B89CFF]" />
                <span className="text-xs text-[#B89CFF] font-semibold">Cliente verificada</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { val: '12', label: 'Citas', color: 'linear-gradient(135deg, #F5B6C8, #FFD6E7)' },
              { val: '3', label: 'Favoritas', color: 'linear-gradient(135deg, #DCC6FF, #B89CFF)' },
              { val: '8', label: 'Reseñas', color: 'linear-gradient(135deg, #FFD6E7, #DCC6FF)' },
            ].map(({ val, label, color }) => (
              <div key={label} className="rounded-2xl p-3 text-center" style={{ background: color }}>
                <p className="text-xl font-bold text-[#1F1F1F]">{val}</p>
                <p className="text-[10px] text-[#555] font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Favoritas */}
        <div className="bg-white border-b border-black/[0.06] px-5 py-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-[#1F1F1F] text-sm">Mis Favoritas</h3>
            <button className="text-xs font-semibold text-[#B89CFF]">Ver todas</button>
          </div>
          <div className="space-y-2.5">
            {favoritos.map((fav, i) => (
              <button
                key={i}
                onClick={() => onNavigate('manicurista-profile')}
                className="w-full rounded-2xl p-3 flex items-center gap-3 text-left active:scale-[0.99] transition-transform"
                style={{ background: '#F4F4F4' }}
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                  <img src={artistPhotos[fav.photoIdx]} alt={fav.nombre} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#1F1F1F] text-sm">{fav.nombre}</h4>
                  <p className="text-xs text-[#888]">⭐ {fav.rating} · {fav.servicios}</p>
                </div>
                <ChevronRight size={16} className="text-[#ccc]" />
              </button>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white px-5 py-5">
          <h3 className="font-bold text-[#1F1F1F] text-sm mb-3">Configuración</h3>
          <div className="space-y-1">
            {settingsItems.map(({ icon: Icon, label, desc }) => (
              <button key={label} className="w-full flex items-center gap-4 px-3 py-3.5 rounded-2xl active:bg-[#F4F4F4] transition-colors">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#F4F4F4' }}>
                  <Icon size={18} className="text-[#888]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-[#1F1F1F] text-sm">{label}</p>
                  <p className="text-[10px] text-[#bbb]">{desc}</p>
                </div>
                <ChevronRight size={16} className="text-[#ddd]" />
              </button>
            ))}

            <div className="pt-2">
              <button
                onClick={() => onNavigate('welcome')}
                className="w-full flex items-center gap-4 px-3 py-3.5 rounded-2xl active:bg-red-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,24,61,0.08)' }}>
                  <LogOut size={18} className="text-[#d4183d]" />
                </div>
                <span className="font-semibold text-[#d4183d] text-sm">Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.06] px-6 py-2">
        <div className="max-w-sm mx-auto flex justify-around">
          {[
            { icon: Home, label: 'Home', screen: 'home-cliente', active: false },
            { icon: Calendar, label: 'Citas', screen: 'citas-cliente', active: false },
            { icon: MessageSquare, label: 'Chat', screen: 'mensajes-cliente', active: false },
            { icon: User, label: 'Perfil', screen: 'perfil-cliente', active: true },
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
