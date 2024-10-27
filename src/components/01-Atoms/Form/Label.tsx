export default function Label({
	children,
	htmlFor,
}: {
	children: React.ReactNode;
	htmlFor?: string;
}) {
	return (
		<label htmlFor={htmlFor} className="text-sm text-gray-500">
			{children}
		</label>
	);
}
