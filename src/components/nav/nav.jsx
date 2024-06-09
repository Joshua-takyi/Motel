// "use client";
import Image from "next/image";
import Link from "next/link";
import { SheetDemo } from "./mobileNav";

export default function Nav() {
	const navLinks = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "Contacts",
			link: "/",
		},
		{
			name: "Support",
			link: "/",
		},
		{
			name: "Report",
			link: "/",
		},
	];

	return (
		<nav className="flex flex-row justify-between lg:p-2 font-medium p-2 z-50 sticky top-0   bg-white items-center shadow-md">
			<header className="p-2">
				<Image
					src={"/review.png"}
					width={50}
					height={30}
					alt="hotel"
					className="drop-shadow-md "
				/>
			</header>
			<div className="navLinks list-none hidden lg:flex flex-row gap-3 items-center p-2 font-semibold x">
				{navLinks.map((link) => (
					<Link
						href={link.link}
						key={link.name}
						className="p-2 hover:-translate-y-3 hover:text-[#6AF146] transition-transform ease-in-out"
					>
						<li>{link.name}</li>
					</Link>
				))}
			</div>
			<div className="lg:hidden flex">
				<SheetDemo />
			</div>
		</nav>
	);
}
