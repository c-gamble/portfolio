import { useState } from 'react';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { galleryList } from '@/data/gallery';

export function GalleryGrid() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };

    return (
        <>
            <div>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {galleryList.map((item, index) => (
                        <motion.div
                            key={index}
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                marginBottom: '10px',
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={item.image}
                                alt={item.description}
                                width={300}
                                height={300}
                                objectFit="cover"
                                className="next-image"
                            />
                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'rgba(0, 0, 0, 0.7)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '10px',
                                    }}
                                >
                                    <p
                                        style={{
                                            color: '#FFF5EA',
                                            textAlign: 'center',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </Masonry>
            </div>
            <style jsx global>
                {`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    .my-masonry-grid {
                        display: flex;
                        margin-left: -10px; /* gutter size offset */
                        width: auto;
                    }

                    .my-masonry-grid_column {
                        padding-left: 10px; /* gutter size */
                        background-clip: padding-box;
                    }

                    .next-image {
                        width: 100% !important;
                        height: auto !important;
                        object-fit: cover;
                    }
                `}
            </style>
        </>
    );
}
