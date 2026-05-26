import { ChevronLeft, MessageSquare, MapPin, Star, Heart, Share2, Clock, CheckCircle } from 'lucide-react';

const portfolioPhotos = [
  'https://images.unsplash.com/photo-1648844421727-cde6c4246b13?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1684609365994-a144ee021c88?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1604654894611-6973b376cbde?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1572743686183-729b40b9230e?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1658051054903-a30911f121d3?w=300&h=300&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1674691412909-8405f0a19940?w=300&h=300&fit=crop&auto=format',
];

export default function ManicuristaProfile({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const services = [
    { name: 'Manicure Francesa', price: '$35', duration: '45 min', popular: true },
    { name: 'Manicure con Gel', price: '$45', duration: '60 min', popular: false },
    { name: 'Diseño Personalizado', price: '$50', duration: '75 min', popular: false },
    { name: 'Uñas Acrílicas', price: '$55', duration: '90 min', popular: false },
  ];

  const reviews = [
    { name: 'Valentina R.', stars: 5, text: 'Excelente trabajo, quedé encantada con mi manicure francesa. Muy profesional y puntual.', time: 'hace 2 días' },
    { name: 'Camila G.', stars: 5, text: 'Los diseños son increíbles, definitivamente vuelvo. Muy recomendada!', time: 'hace 1 semana' },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 py-4 flex items-center gap-3">
        <button
          onClick={() => onNavigate('manicurista-list')}
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: '#F4F4F4' }}
        >
          <ChevronLeft size={20} className="text-[#1F1F1F]" />
        </button>
        <h1 className="font-bold text-[#1F1F1F] flex-1">Perfil</h1>
        <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#F4F4F4' }}>
          <Heart size={18} className="text-[#F5B6C8]" />
        </button>
        <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: '#F4F4F4' }}>
          <Share2 size={18} className="text-[#888]" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-28">
        {/* Profile Card */}
        <div className="bg-white border-b border-black/[0.06] px-5 py-6">
          <div className="flex gap-4 mb-5">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden" style={{ border: '3px solid #F5B6C8' }}>
                <img
                  src="https://images.unsplash.com/photo-1617553902331-b3e3c1aa07da?w=200&h=200&fit=crop&auto=format"
                  alt="María González"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: '#B89CFF' }}>
                <CheckCircle size={14} className="text-white" />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#1F1F1F] mb-1">María González</h2>
              <div className="flex items-center gap-1.5 mb-1.5">
                <Star size={14} className="text-[#F5B6C8] fill-[#F5B6C8]" />
                <span className="text-sm font-bold text-[#1F1F1F]">4.8</span>
                <span className="text-xs text-[#888]">(124 reseñas)</span>
              </div>
              <div className="flex items-center gap-1 mb-3">
                <MapPin size={13} className="text-[#888]" />
                <span className="text-xs text-[#888]">1.2 km · Ciudad de México</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['Gel', 'Francesa', 'Nail Art'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-semibold" style={{ background: 'rgba(245,182,200,0.2)', color: '#1F1F1F' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { val: '5 años', label: 'Experiencia' },
              { val: '350+', label: 'Clientes' },
              { val: '4.8', label: 'Valoración' },
            ].map(({ val, label }) => (
              <div key={label} className="rounded-2xl p-3 text-center" style={{ background: '#F4F4F4' }}>
                <p className="font-bold text-[#1F1F1F] text-base">{val}</p>
                <p className="text-[10px] text-[#888] font-medium">{label}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#555] leading-relaxed mb-5">
            Manicurista profesional con 5 años de experiencia. Especialista en diseños personalizados y nail art. Certificada en técnicas avanzadas de gel y acrílico.
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('reserva')}
              className="flex-1 py-3.5 rounded-2xl font-bold text-white text-sm shadow-md active:scale-[0.98] transition-transform"
              style={{ background: 'linear-gradient(135deg, #1F1F1F, #3A2845)' }}
            >
              Reservar Cita
            </button>
            <button
              onClick={() => onNavigate('mensajes-cliente')}
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(245,182,200,0.2)', border: '1.5px solid #F5B6C8' }}
            >
              <MessageSquare size={20} className="text-[#1F1F1F]" />
            </button>
          </div>
        </div>

        {/* Portfolio */}
        <div className="bg-white border-b border-black/[0.06] px-5 py-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#1F1F1F]">Portafolio</h3>
            <span className="text-xs font-semibold text-[#B89CFF]">Ver todo</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {portfolioPhotos.map((photo, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-[#F4F4F4]">
                <img src={photo} alt={`portfolio ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-white border-b border-black/[0.06] px-5 py-5">
          <h3 className="font-bold text-[#1F1F1F] mb-4">Servicios</h3>
          <div className="space-y-3">
            {services.map((service, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl" style={{ background: '#F4F4F4' }}>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-[#1F1F1F] text-sm">{service.name}</h4>
                    {service.popular && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold" style={{ background: '#F5B6C8', color: '#1F1F1F' }}>Popular</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Clock size={11} className="text-[#888]" />
                    <p className="text-xs text-[#888]">{service.duration}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#1F1F1F]">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white px-5 py-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#1F1F1F]">Reseñas</h3>
            <span className="text-xs font-semibold text-[#B89CFF]">Ver todas</span>
          </div>
          <div className="space-y-3">
            {reviews.map((review, i) => (
              <div key={i} className="p-4 rounded-2xl" style={{ background: '#F4F4F4' }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: 'linear-gradient(135deg, #F5B6C8, #DCC6FF)' }}>
                    {review.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-[#1F1F1F] text-sm">{review.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.stars }).map((_, j) => (
                        <Star key={j} size={11} className="text-[#F5B6C8] fill-[#F5B6C8]" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-[#bbb]">{review.time}</span>
                </div>
                <p className="text-xs text-[#555] leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.06] px-5 py-4">
        <button
          onClick={() => onNavigate('reserva')}
          className="w-full py-4 rounded-2xl font-bold text-white shadow-lg active:scale-[0.98] transition-transform"
          style={{ background: 'linear-gradient(135deg, #F5B6C8 0%, #DCC6FF 100%)' }}
        >
          <span className="text-[#1F1F1F]">Reservar Ahora — $35</span>
        </button>
      </div>
    </div>
  );
}
