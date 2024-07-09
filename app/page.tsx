'use client';

import { useGlobalStore } from '@/store/root';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    const { isDarkMode } = useGlobalStore();
    const { width } = useGlobalStore((state) => state.windowDimensions);

    return width > 680 ? (
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
                    hi, i&apos;m cooper! i&apos;m studying cs and biophysics at
                    usc and currently taking a gap semester in sf to build{' '}
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
                    medicine—and now i&apos;m branching out into quant finance,
                    blockchain tools, and full-stack software engineering.
                </p>
                <div style={{ height: '25px' }} />
                <p>
                    people often ask me what my life goal(s) is/are, and my
                    answer is always the same: &quot;i&apos;m still figuring it
                    out...&quot;
                </p>
                <div style={{ height: '25px' }} />
                <p>
                    unfortunately, coding this portfolio has brought me no
                    closer to the answer, but i certainly had fun! and i think
                    it&apos;s nice to have a little corner of the internet to
                    call my own
                </p>
            </motion.div>
        </motion.div>
    ) : (
        <motion.div
            style={{
                background: isDarkMode
                    ? '#000000'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 'calc(100vh - 150px)',
                width: '100vw',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: isDarkMode ? '#ffffff' : '#000000',
                fontSize: '20px',
            }}
        >
            <motion.div
                style={{
                    width: '70%',
                }}
            >
                <div style={{ height: '40px' }} />
                <p
                    style={{
                        width: '100%',
                        textAlign: 'left',
                    }}
                >
                    hi, i&apos;m cooper! i&apos;m studying cs and biophysics at
                    usc and currently taking a gap semester in sf to build{' '}
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
                    medicine—and now i&apos;m branching out into quant finance,
                    blockchain tools, and full-stack software engineering.
                </p>
                <div style={{ height: '25px' }} />
                <p>
                    people often ask me what my life goal(s) is/are, and my
                    answer is always the same: &quot;i&apos;m still figuring it
                    out...&quot;
                </p>
                <div style={{ height: '25px' }} />
                <p>
                    unfortunately, coding this portfolio has brought me no
                    closer to the answer, but i certainly had fun! and i think
                    it&apos;s nice to have a little corner of the internet to
                    call my own
                </p>
            </motion.div>
            <div style={{ height: '40px' }} />
        </motion.div>
    );
}
