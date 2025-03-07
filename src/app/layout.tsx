import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
	HomeIcon,
	SunMoon,
	Info,
	FolderKanban,
	CircleUserRound,
	Mail,
} from "lucide-react";
import Link from "next/link";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Clock } from "@/components/ui/clock";

const data = [
	{
		title: "Home",
		icon: (
			<HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
		),
		href: "#home",
		id: "home",
	},
	{
		title: "About",
		icon: (
			<CircleUserRound className="h-full w-full text-neutral-600 dark:text-neutral-300" />
		),
		href: "#about",
		id: "about",
	},
	{
		title: "Project",
		icon: (
			<FolderKanban className="h-full w-full text-neutral-600 dark:text-neutral-300" />
		),
		href: "#project",
		id: "project",
	},
	// {
	// 	title: "More",
	// 	icon: (
	// 		<Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />
	// 	),
	// 	href: "#more",
	// 	id: "More",
	// },
	// {
	// 	title: "Theme",
	// 	icon: (
	// 		<SunMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
	// 	),
	// 	href: "#",
	// 	id: "",
	// },
];

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Pantorn Chuavallee",
	description: "portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
			>
				{children}
				<div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2 mb-4 drop-shadow-lg z-50">
					<Dock className="items-end pb-3 bg-secondary">
						{data.map((item, idx) => (
							<Link href={item.href} key={idx}>
								<DockItem className="aspect-square rounded-full bg-foreground">
									<DockLabel>{item.title}</DockLabel>
									<DockIcon>{item.icon}</DockIcon>
								</DockItem>
							</Link>
						))}
					</Dock>
				</div>
			</body>
		</html>
	);
}
