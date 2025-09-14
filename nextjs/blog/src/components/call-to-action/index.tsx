import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Store } from "lucide-react";


export const CallToAction = () => {
	return (
		<section className="py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
			<div className="container">
				<div className="flex flex-col items-center gap-6 text-center">
					<div className="p-4 bg-cyan-300 rounded-full w-fit">
						<Store className="text-cyan-100" />
					</div>
					<h2 className={`font-sans text-center text-heading-xl text-gray-100 text-balance`}>
						Crie uma loja online e inicie suas vendas ainda hoje
					</h2>

					<Button className="rounded-full w-fit mt-6" asChild>
						<Link href="/criar-loja">
							Criar loja grátis <ArrowRight />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};
