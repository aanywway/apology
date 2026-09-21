import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = { onOpen: () => void; opening: boolean };
export function Envelope({ onOpen, opening }: Props) {
  return <motion.button type="button" aria-label="Открыть письмо" onClick={onOpen} disabled={opening} className="group relative flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A5A0] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF0EB]" initial={{ opacity: 0, y: 15, scale: .94 }} animate={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ scale: 1.04 }}>
    <motion.div className="envelope-sway relative flex h-36 w-48 items-center justify-center rounded-2xl bg-[#E8D5C4] shadow-[0_24px_55px_rgba(92,64,51,.16)]" animate={opening ? { rotateX: 70, y: 35, opacity: .15, scale: .92 } : undefined} transition={{ duration: .55 }}>
      <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl border-b border-[#D2BBA7] bg-[#E2CDBB]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
      <Mail size={55} strokeWidth={1.25} className="relative z-10 text-[#9D7768]" />
    </motion.div>
    <span className="mt-7 text-sm font-medium tracking-wide text-[#806255]">Открой меня</span>
  </motion.button>;
}
