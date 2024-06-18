'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import MainHeadshot from '@/public/assets/images/main-headshot.jpeg';

export const Navbar = () => {
    return (
        <motion.div
            style={{
                height: '100px',
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '20px',
                paddingBottom: '20px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Link href="/">
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        src={MainHeadshot}
                        alt="main-headshot"
                        style={{
                            width: '75px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            marginRight: '16px',
                        }}
                    />
                    <p
                        style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                        }}
                    >
                        cooper gamble
                    </p>
                </motion.div>
            </Link>
            <motion.div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    fontSize: '20px',
                    fontWeight: '600',
                }}
            >
                <Link
                    href="/about"
                    style={{
                        marginRight: '20px',
                    }}
                >
                    about
                </Link>
                <Link
                    href="/projects"
                    style={{
                        marginRight: '20px',
                    }}
                >
                    projects
                </Link>
                <Link
                    href="/cv"
                    style={{
                        marginRight: '20px',
                    }}
                >
                    cv
                </Link>
                <Link
                    href="/gallery"
                    style={{
                        marginRight: '20px',
                    }}
                >
                    gallery
                </Link>
                <Link href="/contact" style={{}}>
                    contact
                </Link>
            </motion.div>
        </motion.div>
    );
};
