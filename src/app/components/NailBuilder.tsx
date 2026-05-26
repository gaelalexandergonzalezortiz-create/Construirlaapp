import { ChevronLeft, Sparkles, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const colorMap: Record<string, string> = {
  'Rosa': '#F5B6C8',
  'Nude': '#E8C9B0',
  'Rojo': '#D94848',
  'Negro': '#2D2D2D',
};

const lengthScales: Record<string, number> = {
  'Corto': 0.65,
  'Medio': 1.0,
  'Largo': 1.45,
  'XL': 1.85,
};

const shapeRadius: Record<string, string> = {
  'Cuadrada': '5px 5px 0 0',
  'Almendrada': '50% 50% 22% 22% / 62% 62% 32% 32%',
  'Ovalada': '42% 42% 28% 28% / 52% 52% 38% 38%',
  'Stiletto': '50% 50% 4% 4% / 88% 88% 8% 8%',
};

interface Decoration {
  type: string;
  color: string;
}

function DecorationOverlay({ deco }: { deco: string }) {
  if (deco === 'Francesa') {
    return (
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '28%',
        background: 'rgba(255,255,255,0.82)', borderRadius: 'inherit',
      }} />
    );
  }
  if (deco === 'Glitter') {
    return (
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 45%, rgba(255,255,255,0.35) 100%)',
      }} />
    );
  }
  if (deco === 'Minimal') {
    return (
      <div style={{
        position: 'absolute', top: '18%', left: '50%', transform: 'translateX(-50%)',
        width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
        boxShadow: '0 0 4px rgba(255,255,255,0.8)',
      }} />
    );
  }
  if (deco === 'Floral') {
    return (
      <div style={{
        position: 'absolute', top: '12%', left: '50%', transform: 'translateX(-50%)',
        fontSize: 9, color: 'rgba(255,255,255,0.95)', lineHeight: 1,
      }}>✿</div>
    );
  }
  return null;
}

function HandPreview({ color, shape, length, decoration }: { color: string; shape: string; length: string; decoration: string }) {
  const nailColor = colorMap[color] || '#F5B6C8';
  const scale = lengthScales[length] || 1;
  const radius = shapeRadius[shape] || shapeRadius['Almendrada'];
  const SKIN = '#F9D5BE';
  const SKIN_SHADOW = '#F0C5AB';

  const fingers = [
    { w: 22, nailBaseH: 22, fingerH: 46, topOff: 16, label: 'pinky' },
    { w: 26, nailBaseH: 28, fingerH: 58, topOff: 5, label: 'ring' },
    { w: 28, nailBaseH: 32, fingerH: 66, topOff: 0, label: 'middle' },
    { w: 26, nailBaseH: 28, fingerH: 60, topOff: 6, label: 'index' },
    { w: 34, nailBaseH: 24, fingerH: 44, topOff: 24, label: 'thumb' },
  ];

  return (
    <div style={{
      background: 'linear-gradient(145deg, #FFF0F7 0%, #F5EEFF 100%)',
      borderRadius: 24, padding: '28px 12px 20px',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      gap: 7, minHeight: 175, position: 'relative',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 140, height: 140, borderRadius: '50%',
        background: `radial-gradient(circle, ${nailColor}22 0%, transparent 70%)`,
        transition: 'all 0.3s ease',
      }} />

      {fingers.map((f) => {
        const nailH = Math.round(f.nailBaseH * scale);
        return (
          <div key={f.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: f.topOff }}>
            {/* Nail plate */}
            <div style={{
              width: f.w, height: nailH,
              background: nailColor,
              borderRadius: radius,
              position: 'relative', overflow: 'hidden',
              boxShadow: `0 3px 10px ${nailColor}55, 0 1px 3px rgba(0,0,0,0.12)`,
              transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 2,
            }}>
              {/* Nail shine */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(160deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
                borderRadius: 'inherit',
              }} />
              <DecorationOverlay deco={decoration} />
            </div>

            {/* Finger body */}
            <div style={{
              width: f.w - 1, height: f.fingerH,
              background: `linear-gradient(180deg, ${SKIN} 0%, ${SKIN_SHADOW} 100%)`,
              borderRadius: '0 0 16px 16px',
              marginTop: 1, zIndex: 1,
              boxShadow: 'inset -3px 0 6px rgba(0,0,0,0.07), inset 3px 0 4px rgba(255,255,255,0.4)',
            }} />
          </div>
        );
      })}
    </div>
  );
}

export default function NailBuilder({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selected, setSelected] = useState({
    forma: 'Almendrada',
    largo: 'Medio',
    color: 'Rosa',
    decoracion: 'Francesa',
  });

  const options = {
    forma: ['Cuadrada', 'Almendrada', 'Ovalada', 'Stiletto'],
    largo: ['Corto', 'Medio', 'Largo', 'XL'],
    color: ['Rosa', 'Nude', 'Rojo', 'Negro'],
    decoracion: ['Francesa', 'Glitter', 'Minimal', 'Floral'],
  };

  const sectionLabels: Record<string, string> = {
    forma: 'Forma',
    largo: 'Largo',
    color: 'Color',
    decoracion: 'Decoración',
  };

  return (
    <div className="h-screen flex flex-col bg-[#FFFDFB]">
      {/* Header */}
      <div className="bg-white border-b border-black/[0.06] px-5 py-4 flex items-center gap-4">
        <button
          onClick={() => onNavigate('home-cliente')}
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: '#F4F4F4' }}
        >
          <ChevronLeft size={20} className="text-[#1F1F1F]" />
        </button>
        <div>
          <p className="text-[10px] text-[#B89CFF] font-semibold uppercase tracking-widest">Nail Builder</p>
          <h1 className="font-bold text-[#1F1F1F] text-base">Diseña tus uñas</h1>
        </div>
        <div className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: 'rgba(184,156,255,0.15)' }}>
          <Sparkles size={13} className="text-[#B89CFF]" />
          <span className="text-xs font-semibold text-[#B89CFF]">Vista previa</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5 pb-36 space-y-5">
        {/* Nail Preview */}
        <HandPreview
          color={selected.color}
          shape={selected.forma}
          length={selected.largo}
          decoration={selected.decoracion}
        />

        {/* Current design badge */}
        <div className="flex items-center gap-2 justify-center flex-wrap">
          {Object.entries(selected).map(([key, val]) => (
            <span key={key} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(245,182,200,0.18)', color: '#1F1F1F', border: '1px solid rgba(245,182,200,0.35)' }}>
              {val}
            </span>
          ))}
        </div>

        {/* Options */}
        {(Object.entries(options) as [keyof typeof options, string[]][]).map(([key, values]) => (
          <div key={key} className="space-y-3">
            <h3 className="font-bold text-[#1F1F1F] text-sm">{sectionLabels[key]}</h3>

            {key === 'color' ? (
              <div className="flex gap-3">
                {values.map((option) => {
                  const isSelected = selected[key] === option;
                  return (
                    <button
                      key={option}
                      onClick={() => setSelected({ ...selected, [key]: option })}
                      className="flex flex-col items-center gap-1.5"
                    >
                      <div style={{
                        width: 42, height: 42, borderRadius: '50%',
                        background: colorMap[option],
                        border: isSelected ? '3px solid #1F1F1F' : '3px solid transparent',
                        outline: isSelected ? '2px solid white' : 'none',
                        outlineOffset: -5,
                        boxShadow: isSelected ? `0 4px 12px ${colorMap[option]}66` : `0 2px 8px ${colorMap[option]}44`,
                        transition: 'all 0.2s ease',
                        transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                      }} />
                      <span className="text-[10px] font-medium text-[#888]">{option}</span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {values.map((option) => {
                  const isSelected = selected[key] === option;
                  return (
                    <button
                      key={option}
                      onClick={() => setSelected({ ...selected, [key]: option })}
                      className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-[0.97]"
                      style={isSelected
                        ? { background: '#1F1F1F', color: '#fff', boxShadow: '0 4px 12px rgba(31,31,31,0.25)' }
                        : { background: '#F4F4F4', color: '#555', border: '1.5px solid transparent' }
                      }
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.06] px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] text-[#888] font-medium">Precio estimado</p>
            <h2 className="text-2xl font-bold text-[#1F1F1F]">$45</h2>
          </div>

          <button
            onClick={() => onNavigate('manicurista-list')}
            className="flex-1 rounded-2xl py-4 font-bold text-white flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-transform"
            style={{ background: 'linear-gradient(135deg, #1F1F1F 0%, #3A2845 100%)' }}
          >
            <ShoppingBag size={18} />
            Buscar Artista
          </button>
        </div>
      </div>
    </div>
  );
}
