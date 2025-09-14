import { CustomerStorySection, FeatureSection, HeroSection, SupportSection } from "@/components";

export default function Home() {
	return (
		<>
			<article className="flex flex-col">
				<HeroSection />
            <FeatureSection />
            <SupportSection />
            <CustomerStorySection />
			</article>
		</>
	);
}
