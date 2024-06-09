import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
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
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<GiHamburgerMenu />
				</Button>
			</SheetTrigger>
			<SheetContent side="top">
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
					<SheetDescription>
						<div className="navLinks list-none flex  flex-col gap-10 p-2 font-semibold x">
							{navLinks.map((link) => (
								<Link
									href={link.link}
									key={link.name}
									className="p-1 hover:-translate-y-3 transition-transform ease-in-out"
								>
									<li>{link.name}</li>
								</Link>
							))}
						</div>
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4"></div>
				<SheetFooter>
					<SheetClose asChild></SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
