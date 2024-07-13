import { create } from 'zustand';

interface WindowDimensions {
    width: number;
    height: number;
}

interface ThemeStore {
    isDarkMode: boolean;
    windowDimensions: WindowDimensions;
    toggleTheme: () => void;
    setWindowDimensions: (dimensions: WindowDimensions) => void;
}

export const useGlobalStore = create<ThemeStore>((set) => ({
    isDarkMode: true,
    windowDimensions: {
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    },
    toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    setWindowDimensions: (dimensions) => set({ windowDimensions: dimensions }),
}));
