import { Inter }from "next/font/google";
import { Footer } from "../footer";
import { Header } from "../header";

interface ILayout {
	children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({ children }: ILayout) => {
	return (
		<div className={`relative flex min-h-screen flex-col bg-gray-700 ${inter.className}`}>
			<Header />
			<main className="flex-1 flex flex-col mb-12">{children}</main>
         <Footer />
		</div>
	);
};