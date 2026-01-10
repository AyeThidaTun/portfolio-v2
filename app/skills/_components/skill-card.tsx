"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { skillsData } from "./skill-data";

export default function SkillCard() {
	return (
		<section className="px-40 py-20">
			<div className="grid grid-cols-3 gap-y-18 gap-x-20">
				{skillsData.map((skill) => (
					<div key={skill.id} className="items-center gap-3">
						<div className="flex flex-row gap-2 items-center">
							<motion.div
								initial={{ scale: 0, rotate: -90 }}
								animate={{ scale: 1, rotate: 0 }}
								transition={{
									duration: 0.6,
									delay: 0.2,
									type: "spring",
									stiffness: 150,
								}}
								className="relative"
							>
								<Image
									src={skill.src}
									alt="icon"
									width={40}
									height={50}
									className="relative z-10 group-hover:scale-110 transition-transform duration-300"
								/>
							</motion.div>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, transition: { delay: 0.6 } }}
							>
								{skill.name}
							</motion.p>
						</div>
						<motion.div
							initial={{ width: 0, height: 0 }}
							animate={{ width: `100%`, height: "100%" }}
							transition={{ duration: 1, ease: "easeOut" }}
							className="flex items-center flex-row gap-x-2"
						>
							<Progress value={skill.value} className="w-full h-[10%]" />
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, transition: { delay: 1 } }}
								className="text-sm"
							>
								{skill.value/10 }/10
							</motion.p>
						</motion.div>
					</div>
				))}
			</div>
		</section>
	);
}
