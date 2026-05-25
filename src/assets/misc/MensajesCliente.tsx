import { ChevronLeft, Search, Send, Home, Calendar, MessageSquare, User } from 'lucide-react';
import { useState } from 'react';

export default function MensajesCliente({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      manicurista: 'María González',
      ultimoMensaje: 'Perfecto! Te espero a las 2pm',
      tiempo: '10 min',
      mensajes: [
        { de: 'yo', texto: 'Hola! Quiero agendar una cita', hora: '10:30 AM' },
        { de: 'manicurista', texto: 'Claro! ¿Qué día te viene bien?', hora: '10:32 AM' },
        { de: 'yo', texto: 'Mañana a las 2pm?', hora: '10:35 AM' },
        { de: 'manicurista', texto: 'Perfecto! Te espero a las 2pm', hora: '10:37 AM' },
      ]
    },
    {
      id: 2,
      manicurista: 'Ana Martínez',
      ultimoMensaje: 'Muchas gracias por tu preferencia!',
      tiempo: '1 h',
      mensajes: [
        { de: 'yo', texto: 'Me encantó el trabajo! 💅', hora: '9:15 AM' },
        { de: 'manicurista', texto: 'Muchas gracias por tu preferencia!', hora: '9:20 AM' },
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
          <button onClick={() => selectedChat ? setSelectedChat(null) : onNavigate('home-cliente')}>
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">
            {selectedChat ? currentChat?.manicurista : 'Mensajes'}
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
          <div className="flex-1 overflow-y-auto pb-20">
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
                    <h3 className="font-bold text-gray-800">{chat.manicurista}</h3>
                    <span className="text-xs text-gray-500">{chat.tiempo}</span>
                  </div>
                  <p className="text-gray-600 text-sm truncate">{chat.ultimoMensaje}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 px-6 py-3">
            <div className="max-w-md mx-auto flex justify-between">
              <button onClick={() => onNavigate('home-cliente')} className="flex flex-col items-center text-gray-500">
                <Home size={22} />
                <span className="text-xs">Home</span>
              </button>

              <button onClick={() => onNavigate('citas-cliente')} className="flex flex-col items-center text-gray-500">
                <Calendar size={22} />
                <span className="text-xs">Citas</span>
              </button>

              <button className="flex flex-col items-center text-gray-900">
                <MessageSquare size={22} />
                <span className="text-xs">Chat</span>
              </button>

              <button onClick={() => onNavigate('perfil-cliente')} className="flex flex-col items-center text-gray-500">
                <User size={22} />
                <span className="text-xs">Perfil</span>
              </button>
            </div>
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
