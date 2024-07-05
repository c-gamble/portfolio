'use client';

import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/root';

export default function Contact() {
    const { isDarkMode } = useThemeStore();

    return (
        <motion.div
            style={{
                background: isDarkMode
                    ? '#000000'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 150px)',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: isDarkMode ? '#ffffff' : '#000000',
                fontSize: '24px',
            }}
        >
            This is Contact
        </motion.div>
    );
}
