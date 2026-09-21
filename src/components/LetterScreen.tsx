import { AnimatePresence, motion } from "framer-motion";
import { Envelope } from "./Envelope";
import { useState } from "react";

const paragraphs = [
  "Прости меня.",
  "Я не понимаю, что сейчас творится в моей душе,\nно я понимаю, что так долго продолжаться не может.\nЭто очень сильно влияет на твоё и моё моральное состояние.",
  "Я очень много думаю о произошедшем.\nО тебе. О нас.",
  "Ты — самый важный человек в моей жизни,\nи я не хочу терять то, что у нас есть.",
];

export function LetterScreen() {
  const [opened, setOpened] = useState(false);
  const [opening, setOpening] = useState(false);
  const open = () => {
    if (opening || opened) return;
    setOpening(true);
    window.setTimeout(() => setOpened(true), 600);
  };

  return (
    <motion.section
      key="letter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative z-20 flex min-h-screen items-center justify-center px-5 py-10"
    >
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 0.92, y: -10 }}
            className="flex flex-col items-center"
          >
            <Envelope onOpen={open} opening={opening} />
          </motion.div>
        ) : (
          <motion.article
            key="paper"
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="paper-texture w-full max-w-[640px] rounded-3xl bg-[#FFF9F2] px-7 py-9 shadow-soft sm:px-12 sm:py-12"
          >
            <div className="relative z-10">
              <div className="mb-8 text-center">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F2DFD8] text-[#D9A5A0]">
                  ♥
                </span>
              </div>
              <div className="space-y-6 font-display text-[18px] leading-8 text-[#5C4033] sm:text-[20px] sm:leading-9">
                {paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={paragraph}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.22, duration: 0.55 }}
                    className="whitespace-pre-line"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-10 text-right font-display text-lg italic text-[#8B6A5C]"
              >
                Твой любимый муж
              </motion.div>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
