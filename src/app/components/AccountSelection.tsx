import { User, Sparkles, ArrowRight } from 'lucide-react';

export default function AccountSelection({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="h-screen bg-[#FFFDFB] flex flex-col">
      {/* Header */}
      <div className="pt-16 pb-8 px-8 text-center">
        <span className="text-4xl mb-4 block">💅</span>
        <h1 className="text-2xl font-bold text-[#1F1F1F] mb-2">¿Cómo usarás</h1>
        <h1 className="text-2xl font-bold text-[#1F1F1F] mb-3">Nail Match?</h1>
        <p className="text-[#888] text-sm">Selecciona tu tipo de cuenta para continuar</p>
      </div>

      {/* Cards */}
      <div className="flex-1 flex flex-col gap-4 px-6 justify-center">
        {/* Cliente Card */}
        <button
          onClick={() => onNavigate('home-cliente')}
          className="w-full rounded-3xl p-6 text-left active:scale-[0.98] transition-transform shadow-sm"
          style={{ background: 'linear-gradient(135deg, #FFF0F5 0%, #FFE4F0 60%, #F5B6C8 100%)', border: '1.5px solid rgba(245,182,200,0.4)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/70 flex items-center justify-center shadow-sm">
              <User size={28} className="text-[#1F1F1F]" strokeWidth={1.5} />
            </div>
            <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center">
              <ArrowRight size={18} className="text-[#1F1F1F]" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#1F1F1F] mb-1">Soy Cliente</h2>
          <p className="text-sm text-[#555] leading-relaxed">Diseña tus uñas y encuentra tu manicurista ideal cerca de ti</p>

          <div className="flex gap-2 mt-4">
            {['Diseñar', 'Buscar', 'Reservar'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 text-[#1F1F1F]">{tag}</span>
            ))}
          </div>
        </button>

        {/* Manicurista Card */}
        <button
          onClick={() => onNavigate('dashboard-manicurista')}
          className="w-full rounded-3xl p-6 text-left active:scale-[0.98] transition-transform shadow-sm"
          style={{ background: 'linear-gradient(135deg, #F5EEFF 0%, #EDE4FF 60%, #DCC6FF 100%)', border: '1.5px solid rgba(220,198,255,0.5)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/70 flex items-center justify-center shadow-sm">
              <Sparkles size={28} className="text-[#1F1F1F]" strokeWidth={1.5} />
            </div>
            <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center">
              <ArrowRight size={18} className="text-[#1F1F1F]" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-[#1F1F1F] mb-1">Soy Manicurista</h2>
          <p className="text-sm text-[#555] leading-relaxed">Gestiona tu agenda, conecta con clientes y haz crecer tu negocio</p>

          <div className="flex gap-2 mt-4">
            {['Agenda', 'Clientes', 'Portafolio'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/60 text-[#1F1F1F]">{tag}</span>
            ))}
          </div>
        </button>
      </div>

      <p className="text-center text-xs text-[#bbb] pb-12 px-8">Puedes cambiar tu tipo de cuenta en cualquier momento desde tu perfil</p>
    </div>
  );
}
