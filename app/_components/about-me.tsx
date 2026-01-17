"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
	const [isNavigating, setIsNavigating] = useState(false);
	const router = useRouter();
	const handleNavigation = () => {
		setIsNavigating(true);
		setTimeout(() => {
			router.push("/projects");
		}, 1000);
	};
	return (
		<section className="">
			<div className="flex items-center justify-center px-5 lg:px-50">
				<div className="border border-black rounded-md p-10">
					<h3 className="text-2xl text-center lg:hidden">About Me</h3>
					<div className="flex justify-center py-10 lg:hidden">
						<div className="relative aspect-square w-50 lg:w-80 col-span-1 lg:hidden">
							<Image
								src="/profile.jpeg"
								alt="profile"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="object-cover rounded-sm"
							/>
						</div>
					</div>
					<div className="grid lg:grid-cols-2 flex-row">
						<div className="text-md space-y-4">
							<h3 className="text-2xl pb-10 hidden lg:block">About Me</h3>
							<p>
								Hi there! My name is Aye Thida Tun. You can also call me Anna.
							</p>
							<p>
								Currently, I am in my final year at Singapore Polytechnic,
								pursuing a Diploma in Information Technology.
							</p>
							<p>
								I love building things with code, exploring new technologies,
								and bringing ideas to life.
							</p>
							<p>
								This portfolio was designed and developed from the ground up as
								a showcase of my skills and projects.
							</p>
							<div className="flex justify-center lg:justify-start pt-5">
								<Button
									className={`cursor-pointer border border-black hover:bg-orange-100 ${
										isNavigating ? "bg-orange-100" : ""
									}`}
									variant="outline"
									onClick={() => handleNavigation()}
									disabled={isNavigating}
								>
									{isNavigating ? (
										<div className="flex items-center">
											<p className="pr-5">Loading...</p>
											<Icon
												icon="eos-icons:bubble-loading"
												width="30"
												height="30"
											/>
										</div>
									) : (
										" View my work!"
									)}
								</Button>
							</div>
						</div>
						<div className="flex items-center justify-center">
							{/* <Image
								src="/profile.jpeg"
								alt="profile"
								width={350}
								height={300}
								className="rounded-lg"
							/> */}
							<div className="relative aspect-square w-25 lg:w-100 col-span-1 hidden lg:block">
								<Image
									src="/profile.jpeg"
									alt="profile"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="object-cover rounded-sm"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
