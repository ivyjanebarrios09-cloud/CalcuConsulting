'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type CardProps = React.ComponentProps<typeof Card>;

interface AnimatedCardProps extends CardProps {
  delay?: number;
  index?: number;
}

export function AnimatedCard({ children, className, index = 0, ...props }: AnimatedCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 75, rotate: -5 },
    visible: { 
        opacity: 1, 
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: index * 0.15,
        }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      className="h-full"
    >
      <Card className={cn("h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl", className)} {...props}>
        {children}
      </Card>
    </motion.div>
  );
}
