import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { QuestionScreen } from './components/QuestionScreen';
import { LetterScreen } from './components/LetterScreen';
import { FloatingHearts } from './components/FloatingHearts';

type Screen = 'question' | 'letter';
export default function App() {
  const [screen, setScreen] = useState<Screen>('question');
  const [escapeCount, setEscapeCount] = useState(0);
  const registerEscape = () => setEscapeCount((count) => count + 1);
  return <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#FDF2F0_0%,#FAF3EC_48%,#F5E6E0_100%)] text-[#5C4033]">
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,.65),transparent_42%)]" />
    <FloatingHearts />
    <AnimatePresence mode="wait">
      {screen === 'question' ? <QuestionScreen key="question" onYes={() => setScreen('letter')} escapeCount={escapeCount} onEscape={registerEscape} /> : <LetterScreen key="letter" />}
    </AnimatePresence>
  </main>;
}
