'use client';

import Project from '@/components/Project';
import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/root';

const projects = [
    {
        title: 'Statcaster',
        date: 'June 2024',
        github: 'https://github.com/c-gamble/statcaster',
        demo: 'https://www.youtube.com/embed/vOAnV7RZX7U?si=ENwCRJo0ayyoTr1l',
        visit: 'https://warpcast.com/~/developers/frames?url=https://statcaster-by-soft.vercel.app/frames/home',
        description:
            'I built a Farcaster Frames that allows users to create displays for their tokens with real-time statistics, including holders, total supply, and centralization.',
        skills: ['next.js', 'typescript', 'ethers.js'],
    },
];

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
            <div style={{ height: '100px' }} />
            {projects.map((project) => (
                <Project
                    key={project.title}
                    title={project.title}
                    date={project.date}
                    github={project.github}
                    demo={project.demo}
                    visit={project.visit}
                    description={project.description}
                    isDarkMode={isDarkMode}
                />
            ))}
        </motion.div>
    );
}
