import MotionSection from "../motion/motionSection";
import { Button } from "../ui/button";

import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
	weight: "400",
	subsets: ["latin"],
});

export default function Hero() {
	const heroVariant = {
		hidden: {
			opacity: 0,
			x: "-100dvw",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "Spring",
				ease: "linear",
				bounce: 10,
				damping: 17,
			},
		},
	};
	return (
		<MotionSection
			className={`${cinzel.className}  flex flex-row justify-center text-center lg:my-10  lg:m-20 lg:max-w-5xl   items-center`}
			variants={heroVariant}
			initial="hidden"
			animate="visible"
		>
			<div>
				<h1
					className="  lg:text-5xl md:text-3xl text-2xl tracking-wide leading-9 font-semibold text-pretty"
					id="head"
				>
					A Commitment to Innovation and Sustainability
				</h1>
				<p
					className={`${cinzel.className}lg:text-balance py-4 tracking-wider leading-9  my-6 max-w-2xl text-center mx-auto text-pretty`}
				>
					Our commitment to innovation and sustainability drives us to adopt
					cutting-edge technologies and eco-friendly practices, ensuring our
					growth benefits both our business and the environment for future
					generations.
				</p>
				<div>
					<Button>Learn more</Button>
				</div>
			</div>
		</MotionSection>
	);
}
