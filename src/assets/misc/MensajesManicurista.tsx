import { ChevronLeft, Search, Send } from 'lucide-react';
import { useState } from 'react';

export default function MensajesManicurista({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      cliente: 'María Torres',
      ultimoMensaje: '¿Tienes disponibilidad para mañana?',
      tiempo: '5 min',
      mensajes: [
        { de: 'cliente', texto: 'Hola! Me gustó tu trabajo', hora: '10:30 AM' },
        { de: 'yo', texto: 'Muchas gracias! 😊', hora: '10:32 AM' },
        { de: 'cliente', texto: '¿Tienes disponibilidad para mañana?', hora: '10:35 AM' },
      ]
    },
    {
      id: 2,
      cliente: 'Sofia Ramos',
      ultimoMensaje: 'Gracias por el servicio!',
      tiempo: '1 h',
      mensajes: [
        { de: 'cliente', texto: 'Gracias por el servicio!', hora: '9:15 AM' },
        { de: 'yo', texto: 'Un placer! Espero verte pronto', hora: '9:20 AM' },
      ]
    },
    {
      id: 3,
      cliente: 'Ana Pérez',
      ultimoMensaje: 'Perfecto, nos vemos entonces',
      tiempo: '2 h',
      mensajes: [
        { de: 'cliente', texto: 'Confirmo mi cita para mañana', hora: '8:00 AM' },
        { de: 'yo', texto: 'Perfecto! Te espero a las 2pm', hora: '8:05 AM' },
        { de: 'cliente', texto: 'Perfecto, nos vemos entonces', hora: '8:10 AM' },
      ]
    },
  ];

  const currentChat = chats.find(c => c.id === selectedChat);

  const sendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-300 p-4">
        <div className="flex items-center gap-4">
          <button onClick={() => selectedChat ? setSelectedChat(null) : onNavigate('dashboard-manicurista')}>
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">
            {selectedChat ? currentChat?.cliente : 'Mensajes'}
          </h1>
        </div>
      </div>

      {!selectedChat ? (
        <>
          {/* Search */}
          <div className="bg-white border-b-2 border-gray-300 px-4 pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar conversaciones"
                className="w-full border-2 border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm"
              />
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className="w-full bg-white border-b-2 border-gray-300 p-4 flex gap-4 hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-xl text-gray-500">×</div>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-gray-800">{chat.cliente}</h3>
                    <span className="text-xs text-gray-500">{chat.tiempo}</span>
                  </div>
                  <p className="text-gray-600 text-sm truncate">{chat.ultimoMensaje}</p>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {currentChat?.mensajes.map((msg, i) => (
              <div key={i} className={`flex ${msg.de === 'yo' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] ${msg.de === 'yo' ? 'bg-gray-800 text-white' : 'bg-white border-2 border-gray-300 text-gray-800'} p-3`}>
                  <p className="text-sm mb-1">{msg.texto}</p>
                  <p className={`text-xs ${msg.de === 'yo' ? 'text-gray-300' : 'text-gray-500'}`}>{msg.hora}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t-2 border-gray-300 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Escribe un mensaje..."
                className="flex-1 border-2 border-gray-300 p-3 text-gray-800"
              />
              <button
                onClick={sendMessage}
                className="bg-gray-800 text-white px-4 border-2 border-gray-900"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
