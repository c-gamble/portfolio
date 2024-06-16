"use client";

import { motion } from "framer-motion"; 
import Link from 'next/link';

export const Navbar = () => {

    return (
        <motion.div className="font-noto height-[100px] flex flex-row px-2 py-6">
            <Link href="/" className="font-bold text-2xl">
                cooper gamble
            </Link>
            <motion.div className="flex flex-row ml-auto">
                <Link href="/about">about</Link>
                <Link href="/projects">projects</Link>
                <Link href="/contact">contact</Link>
            </motion.div>
        </motion.div>
    )
}