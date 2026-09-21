import { Heart } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

type HeartParticle = { id: number; left: number; size: number; color: string; duration: number; delay: number; drift: number };
const colors = ['#D9A5A0', '#E8B4B8', '#C9B8D9', '#E8D5C4'];

export function FloatingHearts() {
  const reduced = useReducedMotion();
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    if (reduced) return;
    let id = 0;
    const add = () => {
      setHearts((current) => {
        const next = [...current, { id: id++, left: 2 + Math.random() * 96, size: 12 + Math.random() * 20, color: colors[Math.floor(Math.random() * colors.length)], duration: 7 + Math.random() * 5, delay: Math.random() * .5, drift: (Math.random() - .5) * 90 }];
        return next.slice(-18);
      });
    };
    add();
    const timer = window.setInterval(add, 800 + Math.random() * 700);
    return () => window.clearInterval(timer);
  }, [reduced]);

  if (reduced) return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-10 opacity-20"><Heart className="absolute left-[12%] top-[18%]" size={22} fill="#D9A5A0" strokeWidth={1}/><Heart className="absolute right-[14%] top-[68%]" size={16} fill="#E8D5C4" strokeWidth={1}/></div>;

  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
    {hearts.map((heart) => (
      <motion.div key={heart.id} initial={{ y: '110vh', x: 0, opacity: 0, rotate: -8 }} animate={{ y: '-15vh', x: [0, heart.drift, -heart.drift * .55, 0], opacity: [0, .5, .45, 0], rotate: [-8, 8, -4, 5] }} transition={{ duration: heart.duration, delay: heart.delay, ease: 'easeInOut' }} className="absolute" style={{ left: `${heart.left}%`, color: heart.color }} onAnimationComplete={() => setHearts((current) => current.filter((item) => item.id !== heart.id))}>
        <Heart size={heart.size} strokeWidth={1.4} fill="currentColor" />
      </motion.div>
    ))}
  </div>;
}
