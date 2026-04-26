import { useChat } from "@ai-sdk/react";
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
				className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 flex flex-col rounded-2xl shadow-2xl 
          overflow-hidden transition-all duration-300 origin-bottom-right backdrop-blur-md ${
						open
							? "opacity-100 scale-100 pointer-events-auto"
							: "opacity-0 scale-95 pointer-events-none"
					}`}
				style={{
					height: "480px",
					background: "rgba(15, 15, 15, 0.95)",
					border: "1px solid rgba(255,255,255,0.1)",
				}}
			>
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
			<Button
				onClick={() => setOpen((prev) => !prev)}
				className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-neutral-200 active:scale-95 transition-all duration-300"
			>
				{open ? (
					// X icon when panel is open
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<title>Open</title>
						<path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
					</svg>
				) : (
					// Chat icon when panel is closed
					<svg
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
					>
						<title>Close</title>
						<path
							d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</Button>
		</>
	);
}
