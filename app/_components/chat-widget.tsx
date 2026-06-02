import { useChat } from "@ai-sdk/react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const GREETING =
	"Hi there! I'm Aye Thida Tun's portfolio assistant. Ask me anything about Aye Thida Tun's skills, projects, experience, or education. How can I help you today?";

export default function ChatWidget() {
	const [open, setOpen] = useState(false);

	const bottomRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const { messages, input, handleInputChange, handleSubmit, isLoading } =
		useChat({
			api: "/api/chat",
			initialMessages: [
				{ id: "greeting", role: "assistant", content: GREETING },
			],
		});

	//scroll to bottom every time message update
	// biome-ignore lint/correctness/useExhaustiveDependencies: scroll to bottom when new messages arrive
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages.length]);

	useEffect(() => {
		if (open) {
			const timer = setTimeout(() => inputRef.current?.focus(), 100);
			return () => clearTimeout(timer);
		}
	}, [open]);

	function onSubmit(e?: React.FormEvent) {
		e?.preventDefault();
		if (!input.trim() || isLoading) return;
		handleSubmit(e); // calls useChat's built-in submit
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			onSubmit(); // submit on Enter key
		}
	}

	return (
		<>
			{/* PANEL — only visible when open===true */}
			<div
				className={`fixed z-50 flex flex-col shadow-2xl overflow-hidden transition-all duration-300 backdrop-blur-md
					bottom-0 right-0 w-full h-dvh rounded-t-2xl
					sm:h-120 sm:bottom-24 sm:right-6 sm:w-96 sm:rounded-2xl sm:origin-bottom-right ${
						open
							? "opacity-100 scale-100 pointer-events-auto"
							: "opacity-0 scale-95 pointer-events-none"
					}`}
				style={{
					background: "rgba(15, 15, 15, 0.95)",
					border: "1px solid rgba(255,255,255,0.1)",
				}}
			>
				{/* Drag handle — mobile only */}
				<div className="flex justify-center pt-3 pb-1 sm:hidden">
					<div className="w-10 h-1 rounded-full bg-white/20" />
				</div>
				{/* HEADER */}
				<div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-white/5">
					<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-bold select-none">
						✦
					</div>
					<div className="flex-1">
						<p className="text-sm font-medium text-white leading-none">
							Portfolio Assistant
						</p>
						<p className="text-xs text-white/40 mt-1">Online</p>
					</div>

					{/* Close button */}
					<Button
						onClick={() => setOpen(false)}
						className="text-white/40 p-1 rounded-lg hover:bg-white hover:text-black transition"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<title>Close Button</title>
							<path d="M12 4L4 12M4 4l8 8" strokeLinecap="round" />
						</svg>
					</Button>
				</div>
				{/* MESSAGES */}
				<div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
					{messages.map((msg) => (
						<div
							key={msg.id}
							className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
						>
							<div
								className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
									msg.role === "user"
										? "bg-white text-black rounded-br-none"
										: "bg-white/10 text-white/90 rounded-bl-none"
								}`}
							>
								{msg.content}
							</div>
						</div>
					))}

					{/* Show bouncing dots while Gemini is thinking */}
					{isLoading && messages[messages.length - 1]?.role !== "assistant" && (
						<div className="flex justify-start">
							<div className="bg-white/10 rounded-2xl rounded-bl-none px-4 py-3">
								<span className="flex gap-1 items-center h-4">
									<span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:-0.3s]" />
									<span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:-0.15s]" />
									<span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" />
								</span>
							</div>
						</div>
					)}

					{/* Invisible div at the bottom — scrolled into view when messages update */}
					<div ref={bottomRef} />
				</div>
				{/* INPUT */}
				<form
					onSubmit={onSubmit}
					className="p-3 border-t border-white/10 flex gap-2 items-center"
				>
					<input
						ref={inputRef}
						type="text"
						value={input}
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
						placeholder="Ask a question..."
						disabled={isLoading}
						className="flex-1 bg-white/5 text-white text-sm placeholder-white/20 rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-white/20 disabled:opacity-50 transition"
					/>
					<button
						type="submit"
						disabled={isLoading || !input.trim()}
						className="w-10 h-10 rounded-xl bg-white text-black hover:bg-gray-200 transition shrink-0 flex items-center justify-center disabled:opacity-30"
					>
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<title>Submit</title>
							<line x1="22" y1="2" x2="11" y2="13" />
							<polygon points="22 2 15 22 11 13 2 9 22 2" />
						</svg>
					</button>
				</form>
			</div>
			{/* FLOATING BUBBLE */}
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: open ? 1 : [1, 1.2, 1] }}
				transition={{
					scale: {
						delay: 0.8,
						duration: 1.2,
						repeat: Infinity,
						repeatDelay: 1,
						ease: "easeInOut",
					},
					default: {
						type: "spring",
						bounce: 0.5,
						duration: 0.8,
					},
				}}
				className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
			>
				<Button
					onClick={() => setOpen((prev) => !prev)}
					className={`rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
						open
							? "hidden sm:flex h-10 w-10 bg-neutral-800 hover:bg-neutral-700 text-white items-center justify-center"
							: "flex items-center gap-2 px-4 py-2 bg-gray-300 hover:bg-neutral-700 text-black hover:text-white"
					}`}
				>
					{open ? (
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
						>
							<title>Close</title>
							<path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
						</svg>
					) : (
						<div className="flex items-center gap-2">
							<Bot size={18} />
							<span className="text-sm font-medium">Ask me!</span>
						</div>
					)}
				</Button>
			</motion.div>
		</>
	);
}
