'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useThemeStore } from '@/store/root';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/components/NavLink';

import MainHeadshot from '@/public/assets/images/main-headshot.jpeg';
import X from '@/public/assets/icons/x.svg';
import LinkedIn from '@/public/assets/icons/linkedin.svg';
import GitHub from '@/public/assets/icons/github.svg';
import MoonIcon from '@/public/assets/icons/moon.svg';
import SunIcon from '@/public/assets/icons/sun.svg';

export const Navbar = () => {
    const { isDarkMode, toggleTheme } = useThemeStore();
    const pathname = usePathname();

    const toggleDarkMode = () => {
        toggleTheme();
    };

    const invertedStyle = {
        filter: isDarkMode ? 'invert(1)' : 'none',
    };

    const isActive = (path: string) => pathname === path;

    const linkStyle = (path: string) => ({
        marginRight: '20px',
        color: isDarkMode ? '#ffffff' : '#000000',
        textDecoration: isActive(path) ? 'underline' : 'none',
        textUnderlineOffset: '5px',
    });

    return (
        <motion.div
            style={{
                background: isDarkMode
                    ? '#000000'
                    : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)',
                height: '100px',
                display: 'flex',
                flexDirection: 'row',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: '20px',
                paddingBottom: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                color: isDarkMode ? '#ffffff' : '#000000',
            }}
        >
            <motion.div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Link href="/">
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
                </Link>
                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div style={{ height: '33%' }} />
                    <Link href={'/'}>
                        <motion.p
                            style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                height: '33%',
                                color: isDarkMode ? '#ffffff' : '#000000',
                            }}
                        >
                            cooper gamble
                        </motion.p>
                    </Link>
                    <motion.div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            height: '33%',
                        }}
                    >
                        <Link
                            href="https://www.linkedin.com/in/cooper-gamble"
                            target="_blank"
                        >
                            <Image
                                src={LinkedIn}
                                alt="linkedin"
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '10px',
                                    ...invertedStyle,
                                }}
                            />
                        </Link>
                        <Link
                            href="https://www.x.com/thecoopergamble"
                            target="_blank"
                        >
                            <Image
                                src={X}
                                alt="x"
                                style={{
                                    width: '18px',
                                    height: '18px',
                                    marginRight: '10px',
                                    ...invertedStyle,
                                }}
                            />
                        </Link>
                        <Link
                            href="https://github.com/c-gamble"
                            target="_blank"
                        >
                            <Image
                                src={GitHub}
                                alt="github"
                                style={{
                                    width: '18px',
                                    height: '18px',
                                    ...invertedStyle,
                                }}
                            />
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
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
                <button
                    onClick={toggleDarkMode}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        marginRight: '20px',
                    }}
                >
                    <Image
                        src={isDarkMode ? SunIcon : MoonIcon}
                        alt={isDarkMode ? 'Light mode' : 'Dark mode'}
                        width={24}
                        height={24}
                    />
                </button>
                <NavLink
                    href="/"
                    isDarkMode={isDarkMode}
                    className={isActive('/') ? 'active' : ''}
                >
                    home
                </NavLink>
                <NavLink
                    href="/projects"
                    isDarkMode={isDarkMode}
                    className={isActive('/projects') ? 'active' : ''}
                >
                    projects
                </NavLink>
                <NavLink
                    href="/cv"
                    isDarkMode={isDarkMode}
                    className={isActive('/cv') ? 'active' : ''}
                >
                    cv
                </NavLink>
                <NavLink
                    href="/gallery"
                    isDarkMode={isDarkMode}
                    className={isActive('/gallery') ? 'active' : ''}
                >
                    gallery
                </NavLink>
                <NavLink
                    href="/contact"
                    isDarkMode={isDarkMode}
                    className={isActive('/contact') ? 'active' : ''}
                >
                    contact
                </NavLink>
            </motion.div>
        </motion.div>
    );
};
