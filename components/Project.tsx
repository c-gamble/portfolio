'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import GitHub from '@/public/assets/icons/github.svg';
import YouTube from '@/public/assets/icons/youtube.png';
import Visit from '@/public/assets/icons/visit.png';

type ProjectProps = {
    title: string;
    date: string;
    github: string;
    demo: string;
    visit: string;
    description: string;
    isDarkMode: boolean;
};

export default function Project(params: ProjectProps) {
    return (
        <motion.div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '70%',
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottom: '1px dotted #000000',
                }}
            >
                <p
                    style={{
                        fontSize: '18px',
                        fontWeight: 500,
                    }}
                >
                    {params.title}
                </p>
                <p
                    style={{
                        fontSize: '18px',
                        fontWeight: 500,
                    }}
                >
                    {params.date}
                </p>
            </motion.div>
            <motion.div
                style={{
                    marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <p
                    style={{
                        fontSize: '16px',
                        maxWidth: '70%',
                    }}
                >
                    {params.description}
                </p>

                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        width: '15%',
                        minWidth: '100px',
                    }}
                >
                    <Link href={params.github} target="_blank">
                        <Image
                            src={GitHub}
                            alt="github"
                            style={{
                                width: '20px',
                                height: '20px',
                                filter: params.isDarkMode
                                    ? 'invert(1)'
                                    : 'none',
                            }}
                        />
                    </Link>
                    <Link
                        href={params.demo}
                        target="_blank"
                        style={{
                            marginLeft: '16px',
                        }}
                    >
                        <Image
                            src={YouTube}
                            alt="youtube"
                            style={{
                                width: '20px',
                                height: '20px',
                                filter: params.isDarkMode
                                    ? 'invert(1)'
                                    : 'none',
                            }}
                        />
                    </Link>
                    <Link
                        href={params.visit}
                        target="_blank"
                        style={{
                            marginLeft: '16px',
                        }}
                    >
                        <Image
                            src={Visit}
                            alt="visit"
                            style={{
                                width: '20px',
                                height: '20px',
                                filter: params.isDarkMode
                                    ? 'invert(1)'
                                    : 'none',
                            }}
                        />
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
