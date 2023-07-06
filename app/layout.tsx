import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata = {
	title: 'Car Showcase',
	description: 'Explore the best cars for your taste.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
