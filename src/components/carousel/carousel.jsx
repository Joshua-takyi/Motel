"use client";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const cinzel = Cinzel({
	weight: "400",
	subsets: ["latin"],
});

export default function CarouselHero() {
	const plugin = React.useRef(
		Autoplay({ delay: 5000, stopOnInteraction: true })
	);
	const items = [
		{
			image: "/hotel.jpg",
			header: "Hotel",
			text: "Rent cozy rooms for your stay. We offer affordable accommodation with well-appointed rooms for short or long-term rentals. Book your comfortable room now!",
			id: 1,
		},
		{
			image: "/doggo.jpg",
			header: "Renting",
			text: "Book your room today and discover why our guests choose us for their accommodation needs. Experience the best in comfort, convenience, and hospitality at our hotel.",
			id: 2,
		},
	];
	return (
		<Carousel
			plugins={[plugin.current]}
			className="w-full lg:my-10 bg-[#EEEEEE] p-4 rounded-sm shadow-sm"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{items.map((item, index) => (
					<CarouselItem
						key={index}
						className={`${cinzel.className} flex lg:flex-row flex-col justify-center gap-5`}
					>
						<div className="lg:p-4">
							<Image
								src={item.image}
								alt={item.text}
								width={500}
								height={400}
								className="lg:max-h-[600px] min-h-[400px]"
							/>
						</div>
						<div className="lg:w-1/2 flex flex-col justify-center gap-5 lg:p-4">
							<h3 className="lg:text-7xl md:text-3xl text-2xl tracking-wide leading-9 text-pretty">
								{item.header}
							</h3>
							<p className="lg:text-xl md:text-lg text-sm tracking-wide font-medium text-pretty">
								{item.text}
							</p>
							<div className="md:max-w-sm w-full">
								<Button>Learn More</Button>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
