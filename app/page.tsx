'use client';

import { useThemeStore } from '@/store/root';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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
                width: '100vw',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: isDarkMode ? '#ffffff' : '#000000',
                fontSize: '20px',
            }}
        >
            <motion.div
                style={{
                    width: '50%',
                }}
            >
                <div style={{ height: '100px' }} />
                <p
                    style={{
                        width: '100%',
                        textAlign: 'left',
                    }}
                >
                    hi, i'm cooper! i'm studying cs and biophysics at usc and
                    currently taking a gap semester in sf to build{' '}
                    <Link
                        href="https://algorhythm.app"
                        target="_blank"
                        style={{
                            color: isDarkMode ? '#ffffff' : '#000000',
                            textDecoration: 'underline',
                        }}
                    >
                        algorhythm
                    </Link>{' '}
                    and work at{' '}
                    <Link
                        href="https://docs.krav.trade"
                        target="_blank"
                        style={{
                            color: isDarkMode ? '#ffffff' : '#000000',
                            textDecoration: 'underline',
                        }}
                    >
                        krav
                    </Link>
                    .
                </p>
                <div style={{ height: '25px' }} />
                <p>
                    i spent a few years in high school and early undergrad
                    working on AI—particularly vision and language models for
                    medicine—and now i'm branching out into quant finance,
                    blockchain tools, and full-stack software engineering.
                </p>
                <div style={{ height: '25px' }} />
                <p>
                    people often ask me what my life goal(s) is/are, and my
                    answer is always the same: "let me get back to you in five
                    years."
                </p>
                <div style={{ height: '25px' }} />
                <p>
                    if you've come here looking for answers to questions like
                    that, i'm afraid you'll be disappointed—but do stick around
                    and get to know me :)
                </p>
            </motion.div>
        </motion.div>
    );
}
