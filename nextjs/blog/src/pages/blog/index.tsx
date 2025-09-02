import Image from "next/image";

export default function Blog() {
	return (
		<div>
			<h2>Blog</h2>
			<Image
				src="/assets/foster-lake.jpg"
				alt="Foster Lake"
				width={500}
				height={300}
				priority
			/>
		</div>
	);
}
