'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useGlobalStore } from '@/store/root';

import GitHub from '@/public/assets/icons/github.svg';
import YouTube from '@/public/assets/icons/youtube.png';
import Visit from '@/public/assets/icons/visit.png';

type ProjectProps = {
    status: string;
    title: string;
    date: string;
    github: string;
    demo: string;
    visit: string;
    description: string;
    skills: string[];
    isDarkMode: boolean;
    colors: any;
};

export default function Project(params: ProjectProps) {
    const { width } = useGlobalStore((state) => state.windowDimensions);

    return width > 680 ? (
        <motion.div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '70%',
                marginBottom: '40px',
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottom: `1px dotted ${
                        params.isDarkMode ? '#ffffff' : '#000000'
                    }`,
                }}
            >
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        padding: '4px 0px',
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
                    <motion.div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '10px',
                        }}
                    >
                        {params.skills.map((skill, index) => (
                            <p
                                key={index}
                                style={{
                                    whiteSpace: 'nowrap',
                                    marginLeft: '10px',
                                    fontSize: '10px',
                                    fontWeight: 500,
                                    background: params.isDarkMode
                                        ? params.colors?.get(skill as any)
                                              ?.darkBackgroundColor || '#000000'
                                        : params.colors?.get(skill as any)
                                              ?.lightBackgroundColor ||
                                          '#ffffff',
                                    color: params.isDarkMode
                                        ? params.colors?.get(skill as any)
                                              ?.darkTextColor || '#ffffff'
                                        : params.colors?.get(skill as any)
                                              ?.lightTextColor || '#000000',
                                    padding: '4px 8px',
                                    borderRadius: '8px',
                                }}
                            >
                                {skill}
                            </p>
                        ))}
                    </motion.div>
                </motion.div>
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        padding: '4px 0px',
                    }}
                >
                    {/* <p
                        style={{
                            marginRight: '10px',
                            fontSize: '10px',
                            fontWeight: 500,
                            background:
                                params.status === 'complete'
                                    ? 'rgba(0, 255, 0, 0.3)'
                                    : 'rgba(255, 0, 0, 0.3)',
                            color:
                                params.status === 'complete'
                                    ? 'rgba(0, 255, 0, 1)'
                                    : 'rgba(255, 0, 0, 1)',
                            padding: '4px 8px',
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {params.status}
                    </p> */}
                    <p
                        style={{
                            fontSize: '18px',
                            fontWeight: 500,
                        }}
                    >
                        {params.date}
                    </p>
                </motion.div>
            </motion.div>
            <motion.div
                style={{
                    width: '100%',
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
                    {params.github != '' && (
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
                    )}
                    {params.demo != '' && (
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
                    )}
                    {params.visit != '' && (
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
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    ) : (
        <motion.div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%',
                marginBottom: '40px',
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderBottom: `1px dotted ${
                        params.isDarkMode ? '#ffffff' : '#000000'
                    }`,
                }}
            >
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: '4px 0px',
                        width: '100%',
                    }}
                >
                    <p
                        style={{
                            fontSize: '16px',
                            fontWeight: 500,
                            maxWidth: '30%', // Reduced from 50% to give more space for skills
                        }}
                    >
                        {params.title}
                    </p>
                    <motion.div
                        style={{
                            display: 'flex',
                            flexDirection: 'row', // Corrected value
                            flexWrap: 'wrap', // Added flexWrap property
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            marginLeft: '10px',
                            maxWidth: '70%', // Increased from 50% to allow more space for wrapping
                        }}
                    >
                        {params.skills.map((skill, index) => (
                            <p
                                key={index}
                                style={{
                                    whiteSpace: 'nowrap',
                                    margin: '2px 5px', // Added vertical margin and reduced horizontal margin
                                    fontSize: '10px',
                                    fontWeight: 500,
                                    background: params.isDarkMode
                                        ? params.colors?.get(skill as any)
                                              ?.darkBackgroundColor || '#000000'
                                        : params.colors?.get(skill as any)
                                              ?.lightBackgroundColor ||
                                          '#ffffff',
                                    color: params.isDarkMode
                                        ? params.colors?.get(skill as any)
                                              ?.darkTextColor || '#ffffff'
                                        : params.colors?.get(skill as any)
                                              ?.lightTextColor || '#000000',
                                    padding: '4px 8px',
                                    borderRadius: '8px',
                                }}
                            >
                                {skill}
                            </p>
                        ))}
                    </motion.div>
                </motion.div>
                {/* <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        padding: '4px 0px',
                    }}
                >
                    <p
                        style={{
                            marginRight: '10px',
                            fontSize: '10px',
                            fontWeight: 500,
                            background:
                                params.status === 'complete'
                                    ? 'rgba(0, 255, 0, 0.3)'
                                    : 'rgba(255, 0, 0, 0.3)',
                            color:
                                params.status === 'complete'
                                    ? 'rgba(0, 255, 0, 1)'
                                    : 'rgba(255, 0, 0, 1)',
                            padding: '4px 8px',
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {params.status}
                    </p>
                    <p
                        style={{
                            fontSize: '18px',
                            fontWeight: 500,
                        }}
                    >
                        {params.date}
                    </p>
                </motion.div> */}
            </motion.div>
            <motion.div
                style={{
                    width: '100%',
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
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'flex-end',
                        width: '15%',
                        minWidth: '100px',
                    }}
                >
                    {params.github != '' && (
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
                    )}
                    {params.demo != '' && (
                        <Link href={params.demo} target="_blank">
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
                    )}
                    {params.visit != '' && (
                        <Link href={params.visit} target="_blank">
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
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
