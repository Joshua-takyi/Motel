import { Cinzel } from "next/font/google";
import ServiceCard from "./serviceCard";
const cinzel = Cinzel({
	weight: "400",
	subsets: ["latin"],
});
export default function Service() {
	return (
		<div className=" lg:p-5 bg-slate-50 p-2 lg:my-10 my-5">
			<div
				className={`${cinzel.className} border-b-2 border-b-slate-700 max-w-4xl py-4 lg:my-20 mt-10 my-3`}
			>
				<h4 className="lg:font-semibold font-medium space-y-4 text-slate-800 lg:text-4xl my-3 text-2xl">
					Our Services
				</h4>
				<p className="leading-9 tracking-normal font-medium text-balance ">
					Welcome has other services to offer aside from Hotels and Renting.
				</p>
			</div>
			<section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-5 ">
				<ServiceCard
					image={"/guard.png"}
					alt="guard"
					header="Security"
					description="Ensuring your safety is our top priority. Our hotel features 24/7 security personnel, surveillance cameras, and secure key-card access."
				/>
				<ServiceCard
					image={"/disability.png"}
					header="Accessibility"
					alt="accessibility"
					description="Experience seamless accessibility with our thoughtfully designed facilities. We offer accessible rooms, ramps, and equipment to accommodate all guests."
				/>
				<ServiceCard
					image={"/schedule.png"}
					header="Host Events"
					alt="events"
					description="Host memorable events at our versatile event spaces. Our professional staff assists with planning and execution for flawless gatherings."
				/>
			</section>
		</div>
	);
}
