//? Lateral text with theme switcher
import { Aside } from '../components/Aside.tsx';
//? Footer with tech stack
import { Footer } from '../components/Footer.tsx';
//? Import Preact JSX so we can define the props.children type
import { JSX, toChildArray } from 'preact';

export function Base(props: { children: Array<JSX.Element> | JSX.Element }) {
	return (
		<body>
			{/* Theme switcher */}
			<Aside />
			{/* Main content: name, role, company */}
			<main
				class="absolute top-10 left-10 bottom-10 right-10 p-4"
				style="border: 2px solid var(--accent-color); transition: border 0.7s ease-in-out 0.3s"
			>
				{...toChildArray(props.children)}
			</main>
			{/* Footer with Tech Stack on bottom right corner */}
			<Footer />
		</body>
	);
}
