import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
	href: string;
	children: React.ReactNode;
}

export const ActiveLink = ({ href, children, ...props }: ActiveLinkProps) => {
	const router = useRouter();
   const currentPath = router.asPath;
   const asPath = props.as ?? href;

	const isCurrentPath =
      currentPath === href ||
      currentPath === asPath;

	return (
		<Link
			href={href}
			className={cn(
				"text-action-sm font-medium transition-colors hover:text-blue-200",
				isCurrentPath ? "text-blue-200" : "text-gray-100"
			)}
			{...props}
		>
			{children}
		</Link>
	);
};
