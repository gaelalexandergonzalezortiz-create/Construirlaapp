import { ChevronLeft, Search, Send, Home, Calendar, MessageSquare, User } from 'lucide-react';
import { useState } from 'react';

const avatarColors = [
  'linear-gradient(135deg,#F5B6C8,#DCC6FF)',
  'linear-gradient(135deg,#DCC6FF,#B89CFF)',
];

export default function MensajesCliente({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      manicurista: 'María González',
      ultimoMensaje: 'Perfecto! Te espero a las 2pm 💅',
      tiempo: '10 min',
      unread: 1,
      mensajes: [
        { de: 'yo', texto: 'Hola! Quiero agendar una cita para mañana', hora: '10:30 AM' },
        { de: 'manicurista', texto: 'Claro! ¿Qué día te viene bien?', hora: '10:32 AM' },
        { de: 'yo', texto: 'Mañana a las 2pm?', hora: '10:35 AM' },
        { de: 'manicurista', texto: 'Perfecto! Te espero a las 2pm 💅', hora: '10:37 AM' },
      ],
    },
    {
      id: 2,
      manicurista: 'Ana Martínez',
      ultimoMensaje: 'Muchas gracias por tu preferencia!',
      tiempo: '1 h',
      unread: 0,
      mensajes: [
        { de: 'yo', texto: 'Me encantó el trabajo! 💅', hora: '9:15 AM' },
        { de: 'manicurista', texto: 'Muchas gracias por tu preferencia!', hora: '9:20 AM' },
      ],
    },
  ];

  const currentChat = chats.find((c) => c.id === selectedChat);

  const sendMessage = () => {
    if (message.trim()) setMessage('');
  };

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => (selectedChat ? setSelectedChat(null) : onNavigate('home-cliente'))}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: '#F4F4F4' }}
          >
            <ChevronLeft size={20} className="text-[#1F1F1F]" />
          </button>

          {selectedChat && currentChat ? (
            <div className="flex items-center gap-3 flex-1">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{ background: avatarColors[chats.findIndex((c) => c.id === selectedChat) % 2] }}>
                {currentChat.manicurista[0]}
              </div>
              <div>
                <h1 className="font-bold text-[#1F1F1F] text-sm">{currentChat.manicurista}</h1>
                <p className="text-[10px] text-[#B89CFF] font-medium">En línea</p>
              </div>
            </div>
          ) : (
            <h1 className="font-bold text-[#1F1F1F]">Mensajes</h1>
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
        <>
          <div className="flex-1 overflow-y-auto pb-20">
            {chats.map((chat, i) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className="w-full bg-white border-b border-black/[0.04] px-5 py-4 flex gap-4 text-left active:bg-[#FFFDFB] transition-colors"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0" style={{ background: avatarColors[i % 2] }}>
                  {chat.manicurista[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="font-bold text-[#1F1F1F] text-sm">{chat.manicurista}</h3>
                    <span className="text-[10px] text-[#bbb]">{chat.tiempo}</span>
                  </div>
                  <p className="text-xs text-[#888] truncate">{chat.ultimoMensaje}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-[#F5B6C8] flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-[#1F1F1F]">{chat.unread}</span>
                  </div>
                )}
              </button>
            ))}
          </div>

          <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.06] px-6 py-2">
            <div className="max-w-sm mx-auto flex justify-around">
              {[
                { icon: Home, label: 'Home', screen: 'home-cliente', active: false },
                { icon: Calendar, label: 'Citas', screen: 'citas-cliente', active: false },
                { icon: MessageSquare, label: 'Chat', screen: 'mensajes-cliente', active: true },
                { icon: User, label: 'Perfil', screen: 'perfil-cliente', active: false },
              ].map(({ icon: Icon, label, screen, active }) => (
                <button key={label} onClick={() => onNavigate(screen)} className="flex flex-col items-center gap-0.5 py-1">
                  <Icon size={22} className={active ? 'text-[#B89CFF]' : 'text-[#ccc]'} />
                  <span className={`text-[10px] font-semibold ${active ? 'text-[#B89CFF]' : 'text-[#ccc]'}`}>{label}</span>
                </button>
              ))}
            </div>
          </nav>
        </>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ background: '#FFFDFB' }}>
            {currentChat?.mensajes.map((msg, i) => (
              <div key={i} className={`flex ${msg.de === 'yo' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[72%] px-4 py-3 rounded-2xl"
                  style={msg.de === 'yo'
                    ? { background: '#1F1F1F', color: '#fff', borderBottomRightRadius: 6 }
                    : { background: '#fff', color: '#1F1F1F', borderBottomLeftRadius: 6, border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }
                  }
                >
                  <p className="text-sm leading-relaxed">{msg.texto}</p>
                  <p className="text-[10px] mt-1.5" style={{ color: msg.de === 'yo' ? 'rgba(255,255,255,0.5)' : '#bbb' }}>{msg.hora}</p>
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
                style={{ background: message.trim() ? '#1F1F1F' : '#F4F4F4' }}
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
