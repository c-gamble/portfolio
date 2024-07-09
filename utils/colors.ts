export const getSkillsColors = (strings: string[]) => {
    const colorMap = new Map<
        string,
        {
            darkTextColor: string;
            darkBackgroundColor: string;
            lightTextColor: string;
            lightBackgroundColor: string;
        }
    >();

    function getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomColor(): { r: number; g: number; b: number } {
        return {
            r: getRandomInt(0, 255),
            g: getRandomInt(0, 255),
            b: getRandomInt(0, 255),
        };
    }

    function getYIQ({ r, g, b }: { r: number; g: number; b: number }): number {
        return (r * 299 + g * 587 + b * 114) / 1000;
    }

    function generateReadableColor(): { r: number; g: number; b: number } {
        let color = generateRandomColor();
        while (getYIQ(color) < 128 || getYIQ(color) > 192) {
            color = generateRandomColor();
        }
        return color;
    }

    function rgbToRgba(
        { r, g, b }: { r: number; g: number; b: number },
        alpha: number,
    ): string {
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function adjustBrightness(
        { r, g, b }: { r: number; g: number; b: number },
        factor: number,
    ): { r: number; g: number; b: number } {
        return {
            r: Math.min(255, Math.max(0, Math.round(r * factor))),
            g: Math.min(255, Math.max(0, Math.round(g * factor))),
            b: Math.min(255, Math.max(0, Math.round(b * factor))),
        };
    }

    for (const str of strings) {
        const baseColor = generateReadableColor();

        const darkTextColor = rgbToRgba(adjustBrightness(baseColor, 1.5), 1);
        const darkBackgroundColor = rgbToRgba(
            adjustBrightness(baseColor, 0.5),
            0.3,
        );

        const lightTextColor = rgbToRgba(adjustBrightness(baseColor, 0.6), 1);
        const lightBackgroundColor = rgbToRgba(baseColor, 0.3);

        const colorSet = {
            darkTextColor,
            darkBackgroundColor,
            lightTextColor,
            lightBackgroundColor,
        };

        colorMap.set(str, colorSet);
    }
    return colorMap;
};
