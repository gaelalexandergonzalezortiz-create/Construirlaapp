import { ChevronLeft, MessageSquare, MapPin, Star } from 'lucide-react';

export default function ManicuristaProfile({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const portfolio = [1, 2, 3, 4, 5, 6];
  const services = [
    { name: 'Manicure Francesa', price: '$35', duration: '45 min' },
    { name: 'Manicure con Gel', price: '$45', duration: '60 min' },
    { name: 'Diseño Personalizado', price: '$50', duration: '75 min' },
    { name: 'Uñas Acrílicas', price: '$55', duration: '90 min' },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-300 p-4 flex items-center gap-4">
        <button onClick={() => onNavigate('manicurista-list')}>
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Perfil</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Profile Header */}
        <div className="bg-white border-b-2 border-gray-300 p-6">
          <div className="flex gap-4 mb-4">
            <div className="w-24 h-24 bg-gray-300 flex items-center justify-center flex-shrink-0">
              <div className="text-5xl text-gray-500">×</div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">María González</h2>
              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="text-gray-600 fill-gray-600" />
                <span className="text-gray-600">4.8 (124 reseñas)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span>1.2 km</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            Manicurista profesional con 5 años de experiencia. Especialista en diseños personalizados y nail art.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => onNavigate('reserva')}
              className="flex-1 bg-gray-800 text-white py-3 px-6 border-2 border-gray-900"
            >
              Reservar Cita
            </button>
            <button className="px-6 border-2 border-gray-800 flex items-center justify-center">
              <MessageSquare size={20} className="text-gray-800" />
            </button>
          </div>
        </div>

        {/* Portfolio */}
        <div className="bg-white border-b-2 border-gray-300 p-6">
          <h3 className="font-bold text-gray-800 mb-4">Portafolio</h3>
          <div className="grid grid-cols-3 gap-2">
            {portfolio.map((item) => (
              <div key={item} className="bg-gray-300 border-2 border-gray-400 aspect-square flex items-center justify-center">
                <div className="text-4xl text-gray-500">×</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-white p-6">
          <h3 className="font-bold text-gray-800 mb-4">Servicios</h3>
          <div className="space-y-3">
            {services.map((service, i) => (
              <div key={i} className="border-2 border-gray-300 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-800">{service.name}</h4>
                  <span className="font-bold text-gray-800">{service.price}</span>
                </div>
                <p className="text-gray-600">{service.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Preview */}
        <div className="bg-white border-t-2 border-gray-300 p-6">
          <h3 className="font-bold text-gray-800 mb-4">Reseñas</h3>
          <div className="space-y-4">
            {[1, 2].map((review) => (
              <div key={review} className="border-2 border-gray-300 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="text-xl text-gray-500">×</div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Usuario {review}</p>
                    <div className="text-gray-600">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="bg-white border-t-2 border-gray-300 p-4 fixed bottom-0 w-full">
        <button
          onClick={() => onNavigate('reserva')}
          className="w-full bg-gray-800 text-white py-4 px-6 border-2 border-gray-900"
        >
          Reservar Ahora
        </button>
      </div>
    </div>
  );
}
