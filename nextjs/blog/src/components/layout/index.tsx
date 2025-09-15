import { Inter, PT_Sans_Caption } from "next/font/google";
import { Footer } from "./footer";
import { Header } from "./header";

interface ILayout {
	children: React.ReactNode;
}

const inter = Inter({
   subsets: ["latin"],
   weight: ["400", "700"],
   variable: "--font-inter"
});
const ptSansCaption = PT_Sans_Caption({
   subsets: ["latin"],
   weight: "700",
   variable: "--font-sans"
});

export const Layout = ({ children }: ILayout) => {
	return (
		<div className={`${inter.variable} ${ptSansCaption.variable} relative flex min-h-screen flex-col bg-gray-700 font-inter`}>
			<Header />
			<main className="flex-1 flex flex-col mt-10 mb-12">{children}</main>
			<Footer />
		</div>
	);
};
