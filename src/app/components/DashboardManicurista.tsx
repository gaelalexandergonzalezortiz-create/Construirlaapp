import { Calendar, MessageSquare, User, Settings, Clock, CheckCircle, Bell, TrendingUp, Star } from 'lucide-react';

export default function DashboardManicurista({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const citasPendientes = [
    { cliente: 'Ana Pérez', servicio: 'Manicure Francesa', hora: '2:00 PM', fecha: 'Hoy', precio: '$35', avatar: 'A' },
    { cliente: 'Laura Sánchez', servicio: 'Diseño Personalizado', hora: '4:00 PM', fecha: 'Hoy', precio: '$50', avatar: 'L' },
    { cliente: 'Carmen Díaz', servicio: 'Uñas Acrílicas', hora: '10:00 AM', fecha: 'Mañana', precio: '$55', avatar: 'C' },
  ];

  const mensajes = [
    { cliente: 'María Torres', mensaje: '¿Tienes disponibilidad para mañana?', tiempo: '5 min', unread: true },
    { cliente: 'Sofía Ramos', mensaje: 'Gracias por el servicio! Quedé encantada', tiempo: '1 h', unread: false },
  ];

  const avatarColors = ['linear-gradient(135deg,#F5B6C8,#DCC6FF)', 'linear-gradient(135deg,#DCC6FF,#B89CFF)', 'linear-gradient(135deg,#FFD6E7,#F5B6C8)'];

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-[#888] font-medium">Miércoles 25 Mayo 2026</p>
            <h1 className="text-xl font-bold text-[#1F1F1F]">Hola, María 👋</h1>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center relative" style={{ background: '#F4F4F4' }}>
              <Bell size={18} className="text-[#1F1F1F]" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#F5B6C8] border-2 border-white" />
            </button>
            <button
              onClick={() => onNavigate('perfil-manicurista-edit')}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#F5B6C8]"
            >
              <img src="https://images.unsplash.com/photo-1617553902331-b3e3c1aa07da?w=100&h=100&fit=crop&auto=format" alt="perfil" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { val: '5', label: 'Hoy', icon: Calendar },
            { val: '12', label: 'Semana', icon: TrendingUp },
            { val: '$185', label: 'Hoy', icon: null },
            { val: '4.8', label: 'Rating', icon: Star },
          ].map(({ val, label, icon: Icon }, i) => (
            <div key={i} className="rounded-2xl p-3 text-center" style={{ background: i === 2 ? 'linear-gradient(135deg, #F5B6C8, #DCC6FF)' : '#F4F4F4' }}>
              <p className="font-bold text-[#1F1F1F] text-base leading-tight">{val}</p>
              <p className="text-[10px] text-[#888] font-medium mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5 pb-24 space-y-6">
        {/* Citas Pendientes */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-[#1F1F1F]">Citas de Hoy</h2>
            <button
              onClick={() => onNavigate('calendario-manicurista')}
              className="text-xs font-semibold text-[#B89CFF]"
            >
              Ver agenda
            </button>
          </div>

          <div className="space-y-3">
            {citasPendientes.map((cita, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-black/[0.05]">
                <div className="flex gap-3 mb-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white" style={{ background: avatarColors[i] }}>
                    {cita.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-bold text-[#1F1F1F] text-sm">{cita.cliente}</h3>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={cita.fecha === 'Hoy'
                          ? { background: 'rgba(245,182,200,0.25)', color: '#1F1F1F' }
                          : { background: '#F4F4F4', color: '#888' }
                        }
                      >
                        {cita.fecha}
                      </span>
                    </div>
                    <p className="text-xs text-[#888] mt-0.5">{cita.servicio}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        <Clock size={11} className="text-[#B89CFF]" />
                        <span className="text-xs font-semibold text-[#1F1F1F]">{cita.hora}</span>
                      </div>
                      <span className="font-bold text-[#1F1F1F] text-sm">{cita.precio}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => onNavigate('mensajes-manicurista')}
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
                    style={{ background: '#F4F4F4', color: '#1F1F1F' }}
                  >
                    <MessageSquare size={13} />
                    Mensaje
                  </button>
                  <button
                    className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5"
                    style={{ background: 'linear-gradient(135deg, #1F1F1F, #3A2845)' }}
                  >
                    <CheckCircle size={13} />
                    Completar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mensajes */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-[#1F1F1F]">Mensajes</h2>
            <button onClick={() => onNavigate('mensajes-manicurista')} className="text-xs font-semibold text-[#B89CFF]">Ver todos</button>
          </div>

          <div className="space-y-2">
            {mensajes.map((msg, i) => (
              <button
                key={i}
                onClick={() => onNavigate('mensajes-manicurista')}
                className="w-full bg-white rounded-2xl p-4 flex gap-3 text-left shadow-sm border border-black/[0.05]"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-sm" style={{ background: avatarColors[i] }}>
                  {msg.cliente[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-[#1F1F1F] text-sm">{msg.cliente}</h3>
                    <span className="text-[10px] text-[#bbb]">{msg.tiempo}</span>
                  </div>
                  <p className="text-xs text-[#888] truncate mt-0.5">{msg.mensaje}</p>
                </div>
                {msg.unread && <div className="w-2 h-2 rounded-full bg-[#F5B6C8] mt-1 flex-shrink-0" />}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="font-bold text-[#1F1F1F] mb-3">Acciones Rápidas</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('calendario-manicurista')}
              className="rounded-2xl p-5 flex flex-col items-center gap-3 active:scale-[0.97] transition-transform"
              style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4F0)', border: '1.5px solid rgba(245,182,200,0.3)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(245,182,200,0.3)' }}>
                <Calendar size={24} className="text-[#1F1F1F]" />
              </div>
              <p className="font-bold text-[#1F1F1F] text-sm">Mi Agenda</p>
            </button>
            <button
              onClick={() => onNavigate('perfil-manicurista-edit')}
              className="rounded-2xl p-5 flex flex-col items-center gap-3 active:scale-[0.97] transition-transform"
              style={{ background: 'linear-gradient(135deg, #F5EEFF, #EDE4FF)', border: '1.5px solid rgba(220,198,255,0.4)' }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(220,198,255,0.3)' }}>
                <User size={24} className="text-[#1F1F1F]" />
              </div>
              <p className="font-bold text-[#1F1F1F] text-sm">Mi Perfil</p>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.06] px-6 py-2">
        <div className="max-w-sm mx-auto flex justify-around">
          {[
            { icon: Calendar, label: 'Inicio', screen: 'dashboard-manicurista', active: true },
            { icon: MessageSquare, label: 'Mensajes', screen: 'mensajes-manicurista', active: false },
            { icon: User, label: 'Perfil', screen: 'perfil-manicurista-edit', active: false },
            { icon: Settings, label: 'Ajustes', screen: 'dashboard-manicurista', active: false },
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
