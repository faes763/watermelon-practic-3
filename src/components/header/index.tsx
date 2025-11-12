import { NAVIGATION } from "@/common/constant/link";
import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50">
			<div className=" container">
				<nav>
					<ul className=" center">
						{NAVIGATION.LEFT_LINKS.map((link) => (
							<li key={link.href}>
								<Link 
									href={link.href}
									className="block p-4"
								>
									{link.title}
								</Link>
							</li>
						))}
						
						<Link href="/" className="block p-4">
							<Image className=" w-32 object-cover h-14" src="/logo.png" alt="logo" width={300} height={200} />
						</Link>

						{NAVIGATION.RIGHT_LINKS.map((link) => (
							<li key={link.href}>
								<Link 
									href={link.href}
									className="block p-4"
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>

			</div>
		</header>
	);
}
