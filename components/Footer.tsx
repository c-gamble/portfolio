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
                    ? '#000000'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                display: 'flex',
                flexDirection: 'column',
                height: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                color: isDarkMode ? '#ffffff' : '#000000',
            }}
        >
            <p>© 2024 Cooper Gamble</p>
        </motion.div>
    );
};
