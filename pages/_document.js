import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main className="bg-white text-white dark:bg-black dark:text-black" />
				<NextScript />
			</body>
		</Html>
	);
}
