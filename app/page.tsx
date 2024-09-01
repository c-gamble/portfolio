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
                    ? '#1c1c1c'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 150px)',
                width: '100vw',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: isDarkMode ? '#FFF5EA' : '#1c1c1c',
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
                    hi, i&apos;m{' '}
                    <span
                        style={{
                            color: `#${process.env.NEXT_PUBLIC_ACCENT_COLOR}`,
                            fontWeight: 500,
                        }}
                    >
                        Cooper.
                    </span>{' '}
                    i&apos;m studying cs and physics at usc.
                </p>
                <div style={{ height: '25px' }} />
                <p>
                    i am currently taking a gap semester in sf to build{' '}
                    <Link
                        href="https://algorhythm.app"
                        target="_blank"
                        style={{
                            color: `#${process.env.NEXT_PUBLIC_ACCENT_COLOR}`,
                            fontWeight: 500,
                            textDecoration: 'underline',
                        }}
                    >
                        algorhythm
                    </Link>{' '}
                    and work at{' '}
                    <Link
                        href="https://doxa.market"
                        target="_blank"
                        style={{
                            color: `#${process.env.NEXT_PUBLIC_ACCENT_COLOR}`,
                            fontWeight: 500,
                            textDecoration: 'underline',
                        }}
                    >
                        doxa
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
                    ? '#1c1c1c'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 'calc(100vh - 150px)',
                width: '100vw',
                justifyContent: 'flex-start',
                alignItems: 'center',
                color: isDarkMode ? '#FFF5EA' : '#1c1c1c',
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
                    hi, i&apos;m{' '}
                    <span
                        style={{
                            color: `#${process.env.NEXT_PUBLIC_ACCENT_COLOR}`,
                            fontWeight: 500,
                        }}
                    >
                        Cooper.
                    </span>{' '}
                    i&apos;m studying cs and physics at usc.
                </p>
                <div style={{ height: '25px' }} />
                <p>
                    i am currently taking a gap semester in sf to build{' '}
                    <Link
                        href="https://algorhythm.app"
                        target="_blank"
                        style={{
                            color: `#${process.env.NEXT_PUBLIC_ACCENT_COLOR}`,
                            fontWeight: 500,
                            textDecoration: 'underline',
                        }}
                    >
                        algorhythm
                    </Link>{' '}
                    and work at{' '}
                    <Link
                        href="https://doxa.market"
                        target="_blank"
                        style={{
                            color: `#${process.env.NEXT_PUBLIC_ACCENT_COLOR}`,
                            fontWeight: 500,
                            textDecoration: 'underline',
                        }}
                    >
                        doxa
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
