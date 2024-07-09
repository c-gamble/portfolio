'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to home page after 3 seconds
        const timer = setTimeout(() => {
            router.push('/');
        }, 3000);

        // Cleanup the timer when component unmounts
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <p>You will be redirected to the home page shortly.</p>
            <Link href="/">Return Home</Link>
        </div>
    );
}
