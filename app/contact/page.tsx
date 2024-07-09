'use client';

import { motion } from 'framer-motion';
import { useGlobalStore } from '@/store/root';

export default function Contact() {
    const { isDarkMode } = useGlobalStore();

    return (
        <motion.div
            style={{
                background: isDarkMode
                    ? '#000000'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 'calc(100vh - 150px)',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: isDarkMode ? '#ffffff' : '#000000',
                fontSize: '24px',
            }}
        >
            <div style={{ height: '50px' }} />
            <motion.div style={{ width: '80%' }}>
                <p
                    style={{
                        fontSize: '18px',
                        fontWeight: 500,
                        textAlign: 'center',
                    }}
                >
                    i&apos;m always open to chat! feel free to reach out to me
                    at <a href="mailto:cgamble@usc.edu">cgamble@usc.edu</a>
                </p>
            </motion.div>
        </motion.div>
    );
}
