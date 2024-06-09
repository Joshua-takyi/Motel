import { LayoutGridDemo } from "@/components/bentoGrid/grid";
import CarouselHero from "@/components/carousel/carousel";
import Container from "@/components/container/container";
import Details from "@/components/deatils/details";
import Hero from "@/components/hero/hero";
import Service from "@/components/services/service";

export default function Home() {
	return (
		<Container>
			<Hero />
			<LayoutGridDemo />
			<Details />
			<CarouselHero />
			<Service />
		</Container>
	);
}
