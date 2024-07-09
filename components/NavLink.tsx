// NavLink.tsx
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '@/styles/NavLink.module.css';

interface NavLinkProps {
    href: string;
    isDarkMode: boolean;
    children: ReactNode;
    className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
    href,
    isDarkMode,
    children,
    className,
}) => {
    const themeClass = isDarkMode ? styles.dark : styles.light;

    return (
        <Link
            href={href}
            className={`${styles.navLink} ${themeClass} ${className || ''}`}
        >
            {children}
        </Link>
    );
};
