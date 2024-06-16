'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
    return (
        <motion.div
            className="font-noto"
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage:
                    'linear-gradient(90deg, #536976 0%, #292E49 100%)',
                color: 'white',
            }}
        >
            <p
                style={{
                    fontSize: '30px',
                    fontWeight: 'bold',
                }}
            >
                cgamble.dev
            </p>
            <p
                style={{
                    fontSize: '24px',
                    fontWeight: 'normal',
                }}
            >
                coming soon
            </p>
        </motion.div>
    );
}
