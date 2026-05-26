import { ChevronLeft, Search, Send } from 'lucide-react';
import { useState } from 'react';

const avatarColors = [
  'linear-gradient(135deg,#F5B6C8,#DCC6FF)',
  'linear-gradient(135deg,#DCC6FF,#B89CFF)',
  'linear-gradient(135deg,#FFD6E7,#F5B6C8)',
];

export default function MensajesManicurista({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1, cliente: 'María Torres', ultimoMensaje: '¿Tienes disponibilidad para mañana?', tiempo: '5 min', unread: 2,
      mensajes: [
        { de: 'cliente', texto: 'Hola! Me gustó tu trabajo 💅', hora: '10:30 AM' },
        { de: 'yo', texto: 'Muchas gracias! Me alegra mucho 😊', hora: '10:32 AM' },
        { de: 'cliente', texto: '¿Tienes disponibilidad para mañana?', hora: '10:35 AM' },
      ],
    },
    {
      id: 2, cliente: 'Sofía Ramos', ultimoMensaje: 'Gracias por el servicio!', tiempo: '1 h', unread: 0,
      mensajes: [
        { de: 'cliente', texto: 'Gracias por el servicio!', hora: '9:15 AM' },
        { de: 'yo', texto: 'Un placer! Espero verte pronto ✨', hora: '9:20 AM' },
      ],
    },
    {
      id: 3, cliente: 'Ana Pérez', ultimoMensaje: 'Perfecto, nos vemos entonces', tiempo: '2 h', unread: 0,
      mensajes: [
        { de: 'cliente', texto: 'Confirmo mi cita para mañana', hora: '8:00 AM' },
        { de: 'yo', texto: 'Perfecto! Te espero a las 2pm 💅', hora: '8:05 AM' },
        { de: 'cliente', texto: 'Perfecto, nos vemos entonces', hora: '8:10 AM' },
      ],
    },
  ];

  const currentChat = chats.find((c) => c.id === selectedChat);
  const currentChatIdx = chats.findIndex((c) => c.id === selectedChat);

  const sendMessage = () => {
    if (message.trim()) setMessage('');
  };

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => (selectedChat ? setSelectedChat(null) : onNavigate('dashboard-manicurista'))}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: '#F4F4F4' }}
          >
            <ChevronLeft size={20} className="text-[#1F1F1F]" />
          </button>

          {selectedChat && currentChat ? (
            <div className="flex items-center gap-3 flex-1">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: avatarColors[currentChatIdx % 3] }}>
                {currentChat.cliente[0]}
              </div>
              <div>
                <h1 className="font-bold text-[#1F1F1F] text-sm">{currentChat.cliente}</h1>
                <p className="text-[10px] text-[#B89CFF] font-medium">Cliente</p>
              </div>
            </div>
          ) : (
            <div className="flex-1">
              <h1 className="font-bold text-[#1F1F1F]">Mensajes</h1>
              <p className="text-xs text-[#888]">{chats.reduce((s, c) => s + c.unread, 0)} nuevos</p>
            </div>
          )}
        </div>

        {!selectedChat && (
          <div className="relative mt-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#bbb]" size={16} />
            <input
              type="text"
              placeholder="Buscar conversaciones"
              className="w-full rounded-2xl py-2.5 pl-11 pr-4 text-sm outline-none placeholder:text-[#bbb] text-[#1F1F1F]"
              style={{ background: '#F4F4F4' }}
            />
          </div>
        )}
      </div>

      {!selectedChat ? (
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat, i) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className="w-full bg-white border-b border-black/[0.04] px-5 py-4 flex gap-4 text-left active:bg-[#FFFDFB] transition-colors"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0" style={{ background: avatarColors[i % 3] }}>
                {chat.cliente[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="font-bold text-[#1F1F1F] text-sm">{chat.cliente}</h3>
                  <span className="text-[10px] text-[#bbb]">{chat.tiempo}</span>
                </div>
                <p className="text-xs text-[#888] truncate">{chat.ultimoMensaje}</p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-[#B89CFF] flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-white">{chat.unread}</span>
                </div>
              )}
            </button>
          ))}
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ background: '#FFFDFB' }}>
            {currentChat?.mensajes.map((msg, i) => (
              <div key={i} className={`flex ${msg.de === 'yo' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[72%] px-4 py-3 rounded-2xl"
                  style={msg.de === 'yo'
                    ? { background: 'linear-gradient(135deg, #B89CFF, #DCC6FF)', color: '#1F1F1F', borderBottomRightRadius: 6 }
                    : { background: '#fff', color: '#1F1F1F', borderBottomLeftRadius: 6, border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }
                  }
                >
                  <p className="text-sm leading-relaxed">{msg.texto}</p>
                  <p className="text-[10px] mt-1.5 text-[#888]">{msg.hora}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border-t border-black/[0.06] px-4 py-3">
            <div className="flex gap-2 items-end">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Escribe un mensaje..."
                className="flex-1 rounded-2xl px-4 py-3 text-sm outline-none text-[#1F1F1F] placeholder:text-[#bbb]"
                style={{ background: '#F4F4F4' }}
              />
              <button
                onClick={sendMessage}
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 active:scale-[0.95] transition-transform"
                style={{ background: message.trim() ? 'linear-gradient(135deg, #B89CFF, #DCC6FF)' : '#F4F4F4' }}
              >
                <Send size={18} className={message.trim() ? 'text-white' : 'text-[#ccc]'} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
