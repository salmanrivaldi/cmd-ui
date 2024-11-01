"use client";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/01-Atoms/Form/Input";
import { Button } from "@/components/01-Atoms/Button/Button";
import Checkbox from "@/components/01-Atoms/Form/Checkbox";
import Label from "@/components/01-Atoms/Form/Label";
import Image from "next/image";
import { loginAction } from "@/app/actions/auth";

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		remember: false,
	});

	return (
		<div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 bg-animate">
			<style jsx global>{`
				.bg-animate {
					background-size: 400% 400%;
					animation: gradient 15s ease infinite;
				}
				@keyframes gradient {
					0% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0% 50%;
					}
				}
			`}</style>
			<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl overflow-hidden">
				{/* Left Side - Form */}
				<div className="p-8 lg:p-12">
					<div className="mb-8">
						{/* Logo */}
						<div className="mb-8">
							<Image
								src="/images/logo.png"
								alt="Logo"
								className="h-12 w-auto"
								width={100}
								height={50}
								priority
							/>
						</div>
						<h1 className="text-3xl font-bold mb-2">
							Sign In To Admin
						</h1>
						<p className="text-gray-600">
							Community reach helps us connect with more people,
							building lasting relationships and supporting shared
							growth.
						</p>
					</div>

					<form action={loginAction} className="space-y-6">
						<div>
							<Label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Email <span className="text-sidebar">*</span>
							</Label>
							<Input
								type="email"
								id="email"
								value={formData.email}
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
								className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-sidebar focus:border-transparent"
								placeholder="Enter your email address"
								required
							/>
						</div>

						<div>
							<Label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Password <span className="text-sidebar">*</span>
							</Label>
							<div className="relative">
								<Input
									type={showPassword ? "text" : "password"}
									id="password"
									value={formData.password}
									onChange={(e) =>
										setFormData({
											...formData,
											password: e.target.value,
										})
									}
									className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-sidebar focus:border-transparent"
									placeholder="Enter password"
									required
								/>
								<button
									type="button"
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
								>
									{showPassword ? (
										<EyeOff className="w-5 h-5" />
									) : (
										<Eye className="w-5 h-5" />
									)}
								</button>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<Label className="flex items-center space-x-2">
								<Checkbox
									id="remember"
									name="remember"
									checked={formData.remember}
									onChange={(e) =>
										setFormData({
											...formData,
											remember: e.target.checked,
										})
									}
								/>
								<span className="text-sm text-gray-600">
									Remember me
								</span>
							</Label>
							<Link
								href="/forgot-password"
								className="text-sm text-sidebar hover:text-indigo-800"
							>
								Forgot your password?
							</Link>
						</div>

						<Button
							type="submit"
							className="w-full bg-sidebar text-white py-3 hover:bg-dark-hover transition-colors"
						>
							Log In
						</Button>
					</form>

					<p className="mt-8 text-center text-sm text-gray-600">
						Don&apos;t have an account?{" "}
						<Link
							href="/register"
							className="font-medium text-sidebar hover:text-indigo-800"
						>
							Register here
						</Link>
					</p>
				</div>

				{/* Right Side - Decorative */}
				<div className="hidden md:block relative overflow-hidden">
					<Image
						src="/images/guest-hero.png"
						alt="Hero image"
						className="object-contain"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						priority
					/>
				</div>
			</div>
		</div>
	);
}
