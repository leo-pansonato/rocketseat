import { FeatureSection, HeroSection } from "@/components";

export default function Home() {
	return (
		<>
			<article className="flex flex-col">
				<HeroSection />
            <FeatureSection />
			</article>
		</>
	);
}
