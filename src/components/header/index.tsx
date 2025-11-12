'use client'
import { NAVIGATION } from "@/common/constant/link";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/common/ui/shadcn/drawer";

export function Header() {
	return (
		<header className="fixed top-0 mt-5 left-0 right-0 z-50">
			<div className="  container">
				<nav className="border max-sm:hidden border-white/10 rounded-full backdrop-blur-sm bg-white/5">
					<ul className=" center">
						{NAVIGATION.LEFT_LINKS.map((link) => (
							<li className=" translate-y-1" key={link.href}>
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
							<li className=" translate-y-1" key={link.href}>
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
				<nav className="flex justify-between items-center sm:hidden">
					<Link href="/" className="block">
						<Image className=" w-32 object-cover h-14" src="/logo.png" alt="logo" width={300} height={200} />
					</Link>

					<MenuMobile />

				</nav>
			</div>
		</header>
	);
}

const MenuMobile = () => {
	const [open, setOpen] = useState(false);
	
	const allLinks = [...NAVIGATION.LEFT_LINKS, ...NAVIGATION.RIGHT_LINKS];

	return (
		<Drawer direction="right" open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-lg center size-11 cursor-pointer">
					<div className="py-2 w-6 relative flex-col center gap-2">
						<motion.div 
							className="w-full h-0.5 bg-white origin-center"
							animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
							transition={{ duration: 0.3 }}	
						/>
						<motion.div 
							className="w-full h-0.5 bg-white origin-center"
							animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
							transition={{ duration: 0.3 }}
						/>
					</div>
				</div>
			</DrawerTrigger>
			<DrawerContent className="bg-white/95 backdrop-blur-xl border-white/20">
				<div className="flex flex-col p-6 gap-4 h-full">
					<div className="flex justify-between items-center mb-8">
						<Image className=" w-32 object-cover h-14" src="/logo.png" alt="logo" width={300} height={200} />

						<DrawerClose asChild>
							<button 
								className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg center aspect-square size-11"
								type="button"
							>
								<div className=" w-6 aspect-square relative flex-col center gap-2">
								<motion.div 
										className="w-full h-0.5 bg-green origin-center"
										animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
										transition={{ duration: 0.3 }}	
									/>
									<motion.div 
										className="w-full h-0.5 bg-green origin-center"
										animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
										transition={{ duration: 0.3 }}
									/>
								</div>
							</button>
						</DrawerClose>
					</div>
					<nav className="flex flex-col gap-2 flex-1">
						{allLinks.map((link) => (
							<DrawerClose key={link.href} asChild>
								<Link 
									href={link.href}
									className="block p-4 text-xl font-medium text-black hover:bg-white/50 rounded-lg transition-colors"
								>
									{link.title}
								</Link>
							</DrawerClose>
						))}
					</nav>
				</div>
			</DrawerContent>
		</Drawer>
	);
};