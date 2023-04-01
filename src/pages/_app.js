// import '@/styles/globals.css'
import Link from 'next/link';

export default function App({ Component, pageProps }) {
	// console.log('Generating Nav Bar');
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
					<li>
						<Link href='/products'>Products</Link>
					</li>
				</ul>
			</nav>
			<Component {...pageProps} />
		</>
	);
}
