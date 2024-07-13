'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useGlobalStore } from '@/store/root';

export const Footer = () => {
    const { isDarkMode } = useGlobalStore();

    return (
        <motion.div
            style={{
                background: isDarkMode
                    ? '#1c1c1c'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                display: 'flex',
                flexDirection: 'column',
                height: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                color: isDarkMode ? '#FFF5EA' : '#1c1c1c',
            }}
        >
            <p>© 2024 Cooper Gamble</p>
        </motion.div>
    );
};
