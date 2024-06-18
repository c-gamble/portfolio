'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
    return (
        <motion.div
            className="font-noto"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
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
