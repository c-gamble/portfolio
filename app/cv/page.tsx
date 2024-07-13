'use client';

import { motion } from 'framer-motion';
import { useGlobalStore } from '@/store/root';

export default function CV() {
    const { isDarkMode } = useGlobalStore();

    return (
        <motion.div
            style={{
                background: isDarkMode
                    ? '#1c1c1c'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 150px)',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: isDarkMode ? '#FFF5EA' : '#1c1c1c',
                fontSize: '24px',
            }}
        >
            This is CV
        </motion.div>
    );
}
