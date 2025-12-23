"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
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
						className="cursor-pointer hover:border hover:border-black"
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
						<div className="flex items-center justify-center px-50">
							<div className="border rounded-md p-10">
								<div className="grid grid-cols-2 flex-row">
									<div className="text-md space-y-4">
										<h3 className="text-2xl pb-10">About Me</h3>
										<p>
											Hi there! My name is Aye Thida Tun. You can also call me
											Anna.
										</p>
										<p>
											Currently, I am in my final year at Singapore Polytechnic,
											pursuing a Diploma in Information Technology.
										</p>
										<p>
											I love building things with code, exploring new
											technologies, and bringing ideas to life, whether it’s a
											fun side project or something that solves real-world
											problems.
										</p>
										<p>Welcome to my portfolio!</p>
										<Button
											className="cursor-pointer hover:border hover:border-black"
											variant="outline"
											// onClick={() => }
										>
											View my work!
										</Button>
									</div>
									<div className="flex items-center justify-center">
										<Image
											src="/profile.jpeg"
											alt="profile"
											width={350}
											height={300}
											className="rounded-lg"
										/>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
