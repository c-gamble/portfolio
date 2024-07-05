import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const NotoSans = localFont({
    src: [
        {
            path: '../public/assets/fonts/Noto_Sans/static/NotoSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/assets/fonts/Noto_Sans/static/NotoSans-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/assets/fonts/Noto_Sans/static/NotoSans-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/assets/fonts/Noto_Sans/static/NotoSans-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--noto-sans',
});

export const metadata: Metadata = {
    title: 'cooper gamble',
    description: "cooper gamble's portfolio page",
};

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${NotoSans.variable}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
