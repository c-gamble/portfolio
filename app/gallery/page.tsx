'use client';

import { motion } from 'framer-motion';
import { useGlobalStore } from '@/store/root';
import { GalleryGrid } from '@/components/GalleryGrid';

export default function Gallery() {
    const { isDarkMode } = useGlobalStore();

    return (
        <motion.div
            style={{
                background: isDarkMode
                    ? '#000000'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                display: 'flex',
                flexDirection: 'column',
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
                    when i was a kid, i hated pictures. now i cherish each one i
                    have the opportunity to take because they tell the stories
                    words cannot.
                </p>
                <p style={{ fontSize: '18px', textAlign: 'center' }}>
                    here are some of my{' '}
                    <span style={{ fontStyle: 'italic' }}>favorites</span>.
                </p>
                <div style={{ height: '50px' }} />
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '10px',
                    }}
                >
                    <GalleryGrid />
                </div>
            </motion.div>
        </motion.div>
    );
}
