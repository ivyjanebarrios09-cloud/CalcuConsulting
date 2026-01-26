'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  
  const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
  };

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default PageWrapper;
