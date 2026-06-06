"use client";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");

		const res = await fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(form),
		});

		if (res.ok) {
			setStatus("success");
			setForm({ name: "", email: "", company: "", message: "" }); // clear fields
			toast.success("Thanks! I'll get back to you soon!");
		} else {
			setStatus("error");
		}
	};

	return (
		<div className="max-w-xl mx-auto px-6 py-12">
			<h2 className="text-2xl mb-6">Get in touch with me!</h2>
			<p className="text-neutral-500 text-sm leading-relaxed mb-6">
				Whether you are a company looking to collaborate, or just want to say
				hello — I would love to hear from you! Feel free to reach out with any
				questions, opportunities, or just to connect.
			</p>

			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					required
					placeholder="Name"
					className="border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-500"
					value={form.name}
					onChange={(e) => setForm({ ...form, name: e.target.value })}
				/>
				<input
					required
					type="email"
					placeholder="Email"
					className="border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-500"
					value={form.email}
					onChange={(e) => setForm({ ...form, email: e.target.value })}
				/>
				<input
					placeholder="Company Name (optional)"
					className="border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-500"
					value={form.company}
					onChange={(e) => setForm({ ...form, company: e.target.value })}
				/>
				<textarea
					required
					placeholder="Message"
					rows={4}
					className="border border-neutral-300 rounded px-3 py-2 text-sm outline-none focus:border-neutral-500 resize-none"
					value={form.message}
					onChange={(e) => setForm({ ...form, message: e.target.value })}
				/>
				<button
					type="submit"
					disabled={status === "loading"}
					className="self-start px-5 py-2 text-sm bg-neutral-800 text-white rounded-full hover:bg-neutral-700 disabled:opacity-50 transition-colors"
				>
					{status === "loading" ? "Sending..." : "Send message"}
				</button>
				{status === "error" && (
					<p className="text-red-500 text-sm">
						Something went wrong. Please try again.
					</p>
				)}
			</form>
		</div>
	);
}
