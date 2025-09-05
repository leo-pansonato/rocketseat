import Image, { ImageProps } from "next/image";
import Link from "next/link";

export const Logo = ({
	src = "/next.svg",
	alt = "Logo Site",
	width = 116,
	height = 36,
	...props
}: Partial<ImageProps>) => {
	return (
		<Link href={"/"} title="Página Inicial">
			<Image src={src} alt={alt} width={width} height={height} {...props} />
		</Link>
	);
};
