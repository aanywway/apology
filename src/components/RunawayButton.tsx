import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';

type Props = { onRun: (count: number) => void };
export function RunawayButton({ onRun }: Props) {
  const [escaped, setEscaped] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const runAway = useCallback(() => {
    const padding = 18;
    const w = 92;
    const h = 52;
    const x = padding + Math.random() * Math.max(1, window.innerWidth - w - padding * 2) - window.innerWidth / 2;
    const y = padding + Math.random() * Math.max(1, window.innerHeight - h - padding * 2) - window.innerHeight / 2;
    setEscaped(true);
    setPosition({ x, y });
    onRun(1);
  }, [onRun]);

  return <motion.button type="button" aria-label="Нет" onMouseEnter={runAway} onClick={(e) => { e.preventDefault(); runAway(); }} onTouchStart={(e) => { e.preventDefault(); runAway(); }} className={`z-30 rounded-full border border-[#D9A5A0]/30 bg-white/45 px-8 py-4 text-base font-medium text-[#8B6A5C] shadow-sm backdrop-blur-sm transition-colors hover:bg-white/65 ${escaped ? 'fixed left-1/2 top-1/2' : ''}`} animate={escaped ? { x: position.x, y: position.y } : { x: 0, y: 0 }} transition={{ type: 'spring', stiffness: 650, damping: 22, mass: .55 }}>
    Нет
  </motion.button>;
}
