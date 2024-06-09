"use client";

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

export default function Indicator() {
	const ref = useRef();
	const { scrollYProgress: completed } = useScroll();
	return (
		<motion.div
			ref={ref}
			style={{ scaleX: completed }}
			className="bg-[#15F5BA] origin-top-left aspect-square h-1 z-50 w-full sticky top-0"
		></motion.div>
	);
}
