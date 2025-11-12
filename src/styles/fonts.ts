import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const bounded = localFont({
	src: [
		{
			path: "../../public/fonts/Bounded/Bounded-Variable.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-bounded",
});

export const gotham = localFont({
	src: [
		{
			path: "../../public/fonts/Gotham/gothampro.ttf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-gotham",
});