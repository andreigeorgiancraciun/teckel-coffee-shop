'use client'

import { motion } from 'motion/react'

// Re-export subțire — izolează boundary-ul 'use client' de componentele
// Server care afișează textul tradus. Conținutul rămâne server-rendered
// ca `children`; doar acest wrapper de animație e client.
export const Reveal = motion.div
