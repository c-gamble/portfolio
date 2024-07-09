'use client';

import { useEffect } from 'react';
import { useGlobalStore } from '@/store/root';

export const Window = () => {
    const setWindowDimensions = useGlobalStore(
        (state) => state.setWindowDimensions,
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setWindowDimensions]);

    return null;
};
