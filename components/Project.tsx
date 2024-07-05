'use client';

import { motion } from 'framer-motion';

type ProjectProps = {
    title: string;
    startDate: string;
    endDate: string;
    github: string;
    demo: string;
    visit: string;
    description: string;
};

export default function Project(params: ProjectProps) {
    return (
        <motion.div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                fontSize: '24px',
            }}
        >
            <p>{params.title}</p>
            <p>{params.startDate}</p>
            <p>{params.endDate}</p>
            <a href={params.github}>Github</a>
            <a href={params.demo}>Demo</a>
            <a href={params.visit}>Visit</a>
            <p>{params.description}</p>
        </motion.div>
    );
}
