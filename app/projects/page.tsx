'use client';

import Project from '@/components/Project';
import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/root';

export default function Projects() {
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
            <Project
                title="Statcaster"
                startDate="June 2024"
                endDate="Present"
                github="https://github.com/c-gamble/statcaster"
                demo="https://www.youtube.com/watch?v=vOAnV7RZX7U"
                visit="https://warpcast.com/~/developers/frames?url=https://statcaster-by-soft.vercel.app/frames/home"
                description="Warpcast application to display real-time statistics, including holders, total supply, and centralization for users' tokens."
            />
        </motion.div>
    );
}
