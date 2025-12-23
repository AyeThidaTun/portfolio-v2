"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AboutMe from "./_components/about-me";

export default function Home() {
	const [showPage, setShowPage] = useState(false);
	return (
		<section className="font-serif">
			<div className="min-h-screen flex flex-col text-center items-center justify-center font-serif">
				<h3>
					Hi! I am Aye Thida Tun, a passionate full stack developer.
					<br />
					This website talks about my projects, passion and experiences.
				</h3>
				<motion.div
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.5 },
					}}
					className="py-5"
				>
					<Button
						className="cursor-pointer hover:border hover:border-black hover:bg-orange-100"
						variant="outline"
						onClick={() => setShowPage(true)}
					>
						Get Started
						<Icon icon="bx:right-arrow" width="30" height="30" />
					</Button>
				</motion.div>
			</div>
			<AnimatePresence>
				{showPage && (
					<motion.div
						initial={{ y: "100%" }}
						animate={{ y: 0 }}
						exit={{ y: "100%" }}
						transition={{
							duration: 0.6,
							ease: "easeOut",
						}}
						className="min-h-screen fixed inset-0 bg-white z-50 overflow-auto py-20"
					>
						<div className="flex items-center justify-center py-5">
							<Button
								className="cursor-pointer rounded-full p-5"
								onClick={() => setShowPage(false)}
							>
								<Icon icon="bxs:up-arrow" width="30" height="30" />
							</Button>
						</div>
						<AboutMe />
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
