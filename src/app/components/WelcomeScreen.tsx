import logo from "../src/assets/logo.png";
export default function WelcomeScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div
      className="h-screen flex flex-col items-center justify-between overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFFDFB 0%, #FDE8F0 40%, #EDD6FF 100%)'
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F5B6C8 0%, transparent 70%)',
          transform: 'translate(30%, -30%)'
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #DCC6FF 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)'
        }}
      />

      <div className="flex-1 flex flex-col items-center justify-center px-8 pt-16 relative z-10">

        {/* Logo */}
        <div className="mb-8 relative flex justify-center">
        <img
  src={logo}
  alt="Nail Match Logo"
  className="w-40 h-auto object-contain"
/>

          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#B89CFF] rounded-full flex items-center justify-center shadow-md">
            <span style={{ fontSize: 14 }}>✨</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-[#1F1F1F] mb-2 tracking-tight">
          Nail Match
        </h1>

        <p className="text-[#888] text-base font-medium mb-3">
          Tu manicurista perfecta
        </p>

        <div className="flex gap-2 mt-1">
          {['💅', '✨', '🌸'].map((emoji, i) => (
            <span
              key={i}
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{ background: 'rgba(245,182,200,0.2)' }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 justify-center mt-8">
          {['Diseña tus uñas', 'Encuentra artistas', 'Reserva fácil'].map((label) => (
            <span
              key={label}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#1F1F1F]"
              style={{
                background: 'rgba(245,182,200,0.25)',
                border: '1px solid rgba(245,182,200,0.5)'
              }}
            >
              {label}
            </span>
          ))}
        </div>

      </div>

      {/* CTA Section */}
      <div className="w-full px-8 pb-12 space-y-3 relative z-10">

        <button
          onClick={() => onNavigate('account-selection')}
          className="w-full py-4 rounded-2xl text-white font-semibold text-base shadow-lg active:scale-[0.98] transition-transform"
          style={{
            background: 'linear-gradient(135deg, #1F1F1F 0%, #3A3A3A 100%)'
          }}
        >
          Iniciar Sesión
        </button>

        <button
          onClick={() => onNavigate('account-selection')}
          className="w-full py-4 rounded-2xl font-semibold text-base active:scale-[0.98] transition-transform"
          style={{
            background: 'rgba(245,182,200,0.2)',
            border: '1.5px solid #F5B6C8',
            color: '#1F1F1F'
          }}
        >
          Crear Cuenta
        </button>

        <p className="text-center text-xs text-[#aaa] pt-1">
          Al continuar aceptas nuestros <span className="underline">Términos</span> y <span className="underline">Privacidad</span>
        </p>

      </div>
    </div>
  );
}