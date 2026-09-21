import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { RunawayButton } from './RunawayButton';

type Props = { onYes: () => void; escapeCount: number; onEscape: (count: number) => void };
export function QuestionScreen({ onYes, escapeCount, onEscape }: Props) {
  return <motion.section key="question" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: .45 }} className="relative z-20 flex min-h-screen items-center justify-center px-5 py-10">
    <div className="w-full max-w-xl text-center">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-white/50 shadow-sm backdrop-blur-sm"><Heart size={25} fill="#D9A5A0" strokeWidth={1.5} className="text-[#D9A5A0]" /></motion.div>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-[#5C4033] sm:text-6xl">Ты меня любишь?</h1>
      <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#806255]">У меня есть кое-что важное, что я хочу тебе сказать.</p>
      <div className="relative mt-10 flex min-h-16 items-center justify-center gap-4">
        <motion.button type="button" onClick={onYes} whileHover={{ scale: 1.04 }} whileTap={{ scale: .97 }} className="rounded-full bg-[#D9A5A0] px-9 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(217,165,160,.35)]">Да</motion.button>
        <RunawayButton onRun={onEscape} />
      </div>
      <motion.p initial={false} animate={{ opacity: escapeCount >= 2 ? 1 : 0, y: escapeCount >= 2 ? 0 : 4 }} className="mt-7 min-h-6 text-sm font-medium text-[#9B746C]">Она всё равно от тебя убежит 😊</motion.p>
    </div>
  </motion.section>;
}
