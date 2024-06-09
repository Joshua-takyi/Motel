import { Cinzel } from "next/font/google";
import * as React from "react";
import Image from "next/image";
const cinzel = Cinzel({
	weight: "400",
	subsets: ["latin"],
});

export default function ServiceCard({ image, description, header, alt }) {
	return (
		<div className="flex flex-col gap-5 p-4 lg:items-start items-center  border-l-2 border-l-[#6AF146] ">
			<Image
				src={image}
				alt={alt}
				width={200}
				height={100}
				className="max-w-[200px] w-[150px]"
			/>
			<h4
				className={`${cinzel.className} lg:text-3xl text-2xl font-medium py-3`}
			>
				{header}
			</h4>
			<p className="text-balance ">{description}</p>
		</div>
	);
}
