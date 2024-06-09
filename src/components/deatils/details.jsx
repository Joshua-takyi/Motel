"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Prata, Cinzel } from "next/font/google";
const prata = Prata({
	weight: "400",
	subsets: ["latin"],
});
const cinzel = Cinzel({
	weight: "400",
	subsets: ["latin"],
});
export default function Details() {
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start center", "start end"],
	});
	const header = useTransform(scrollYProgress, [0, 1], [0, -100]);
	return (
		<motion.section
			className="flex flex-col items-center lg:mt-20 my-5 lg:gap-10 gap-5 lg:p-10 p-2 justify-center bg-[#DDE6ED] text-[#27374D]"
			ref={ref}
		>
			<motion.ul
				className={`${prata.className} flex flex-row gap-3 list-disc font-medium space-x-6 pt-4 p-2`}
				style={{ translateX: header }}
			>
				<li>Luxury</li>
				<li>Premium</li>
				<li>Experience</li>
			</motion.ul>
			<h2
				className={`${cinzel.className} lg:text-4xl md:text-3xl  lg:tracking-wide leading-loose text-center font-semibold w-full p-2`}
				id="head"
			>
				We Are The Competition
			</h2>
			<div className="w-8 h-1  bg-slate-600"></div>
			<p
				className={`${cinzel.className} text-balance lg:max-w-4xl lg:tracking-widest text-center lg:leading-loose p-2`}
			>
				At Welcome, we redefine real estate excellence. With a dynamic blend of
				innovation and expertise, we lead the competition. Our relentless drive
				for success sets us apart, delivering exceptional results and unmatched
				service. Join us, where competition meets distinction in every endeavor.
			</p>
		</motion.section>
	);
}
