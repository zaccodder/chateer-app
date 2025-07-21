'use client';

import { motion } from 'framer-motion';
import { FcSms, FcCamera, FcVideoCall } from 'react-icons/fc';

const steps = [
  { icon: <FcSms className='w-6 h-6' />, label: 'Send Messages' },
  { icon: <FcCamera className='w-6 h-6' />, label: 'Share Photos' },
  { icon: <FcVideoCall className='w-6 h-6' />, label: 'Video Calls' },
];

export default function CircularHowItWorks() {
  const radius = 120;

  return (
    <motion.div
      className='relative w-[300px] h-[300px] mx-auto flex items-center justify-center'
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: 'linear',
      }}
    >
      {/* Center Circle */}
      <div className='absolute z-10 w-28 h-28 bg-accent text-accent-content flex items-center justify-center rounded-full shadow-lg font-bold text-center text-sm'>
        Chateer
        <br />
        App
      </div>

      {/* Orbiting Steps */}
      {steps.map((step, index) => {
        const angle = (index / steps.length) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={index}
            className='absolute w-24 h-24 bg-muted rounded-full shadow flex flex-col items-center justify-center text-xs text-center p-2 bg-accent text-accent-content '
            style={{
              top: `calc(50% + ${y}px - 48px)`,
              left: `calc(50% + ${x}px - 48px)`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className='text-primary mb-1'>{step.icon}</div>
            {step.label}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
