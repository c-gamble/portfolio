'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useGlobalStore } from '@/store/root';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { NavLink } from '@/components/NavLink';
import styles from '@/styles/NavLink.module.css';
import { useState, useEffect, useRef } from 'react';

import MainHeadshot from '@/public/assets/images/main-headshot.jpeg';
import X from '@/public/assets/icons/x.svg';
import LinkedIn from '@/public/assets/icons/linkedin.svg';
import GitHub from '@/public/assets/icons/github.svg';
import MoonIcon from '@/public/assets/icons/moon.svg';
import SunIcon from '@/public/assets/icons/sun.svg';

export const Navbar = () => {
    const { width, height } = useGlobalStore((state) => state.windowDimensions);

    const { isDarkMode, toggleTheme } = useGlobalStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const menuRef = useRef(null);

    const toggleDarkMode = () => {
        toggleTheme();
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navigateTo = (route: string) => {
        router.push(route);
        setIsMenuOpen(false);
    };

    const invertedStyle = {
        filter: isDarkMode ? 'invert(1)' : 'none',
    };

    const isActive = (path: string) => pathname === path;

    const backgroundStyle = isDarkMode
        ? '#1c1c1c'
        : 'linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)';

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                menuRef.current &&
                (!menuRef.current as any).contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return width > 680 ? (
        <motion.div
            style={{
                background: isDarkMode
                    ? '#1c1c1c'
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
                color: isDarkMode ? '#FFF5EA' : '#1c1c1c',
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
                                color: isDarkMode ? '#FFF5EA' : '#1c1c1c',
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
                    className={isActive('/') ? styles.active : ''}
                >
                    home
                </NavLink>
                <NavLink
                    href="/projects"
                    isDarkMode={isDarkMode}
                    className={isActive('/projects') ? styles.active : ''}
                >
                    projects
                </NavLink>
                {/* <NavLink
                    href="/cv"
                    isDarkMode={isDarkMode}
                    className={isActive('/cv') ? styles.active : ''}
                >
                    cv
                </NavLink>
                <NavLink
                    href="/writing"
                    isDarkMode={isDarkMode}
                    className={isActive('/writing') ? styles.active : ''}
                >
                    writing
                </NavLink> */}
                <NavLink
                    href="/gallery"
                    isDarkMode={isDarkMode}
                    className={isActive('/gallery') ? styles.active : ''}
                >
                    gallery
                </NavLink>
                <NavLink
                    href="/contact"
                    isDarkMode={isDarkMode}
                    className={isActive('/contact') ? styles.active : ''}
                >
                    contact
                </NavLink>
            </motion.div>
        </motion.div>
    ) : (
        <>
            <nav
                style={{
                    background: backgroundStyle,
                    height: '100px',
                    display: 'flex',
                    flexDirection: 'row',
                    padding: '20px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: isDarkMode ? '#FFF5EA' : '#1c1c1c',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link href="/">
                        <Image
                            src={MainHeadshot}
                            alt="main-headshot"
                            width={75}
                            height={75}
                            style={{
                                borderRadius: '20px',
                                marginRight: '16px',
                            }}
                        />
                    </Link>
                    <div>
                        <Link href="/">
                            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                                cooper gamble
                            </p>
                        </Link>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Link
                                href="https://www.linkedin.com/in/cooper-gamble"
                                target="_blank"
                            >
                                <Image
                                    src={LinkedIn}
                                    alt="linkedin"
                                    width={20}
                                    height={20}
                                    style={invertedStyle}
                                />
                            </Link>
                            <Link
                                href="https://www.x.com/thecoopergamble"
                                target="_blank"
                            >
                                <Image
                                    src={X}
                                    alt="x"
                                    width={18}
                                    height={18}
                                    style={invertedStyle}
                                />
                            </Link>
                            <Link
                                href="https://github.com/c-gamble"
                                target="_blank"
                            >
                                <Image
                                    src={GitHub}
                                    alt="github"
                                    width={18}
                                    height={18}
                                    style={invertedStyle}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                    }}
                >
                    <button
                        onClick={toggleDarkMode}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <Image
                            src={isDarkMode ? SunIcon : MoonIcon}
                            alt={isDarkMode ? 'Light mode' : 'Dark mode'}
                            width={24}
                            height={24}
                        />
                    </button>
                    <button
                        onClick={toggleMenu}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <div
                            style={{
                                width: '24px',
                                height: '3px',
                                background: isDarkMode ? '#FFF5EA' : '#1c1c1c',
                                marginBottom: '5px',
                            }}
                        ></div>
                        <div
                            style={{
                                width: '24px',
                                height: '3px',
                                background: isDarkMode ? '#FFF5EA' : '#1c1c1c',
                                marginBottom: '5px',
                            }}
                        ></div>
                        <div
                            style={{
                                width: '24px',
                                height: '3px',
                                background: isDarkMode ? '#FFF5EA' : '#1c1c1c',
                            }}
                        ></div>
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 10,
                            }}
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            ref={menuRef}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                width: '250px',
                                height: '100%',
                                background: backgroundStyle,
                                padding: '20px',
                                boxShadow: '-5px 0 15px rgba(0,0,0,0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                zIndex: 11,
                            }}
                        >
                            <button
                                onClick={toggleMenu}
                                style={{
                                    alignSelf: 'flex-end',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: isDarkMode ? '#FFF5EA' : '#1c1c1c',
                                }}
                            >
                                ×
                            </button>
                            {['home', 'projects', 'gallery', 'contact'].map(
                                (route) => (
                                    <button
                                        key={route}
                                        onClick={() =>
                                            navigateTo(
                                                `/${
                                                    route === 'home'
                                                        ? ''
                                                        : route
                                                }`,
                                            )
                                        }
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: '20px',
                                            fontWeight: '600',
                                            color: isDarkMode
                                                ? '#FFF5EA'
                                                : '#1c1c1c',
                                            textAlign: 'left',
                                            textDecoration: isActive(
                                                `/${
                                                    route === 'home'
                                                        ? ''
                                                        : route
                                                }`,
                                            )
                                                ? 'underline'
                                                : 'none',
                                        }}
                                    >
                                        {route}
                                    </button>
                                ),
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
