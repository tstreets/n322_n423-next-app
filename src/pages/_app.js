import '../styles/globals.css';
import Link from 'next/link';
import NavbarStyles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import HeroStyles from '../styles/Hero.module.css';

export default function App({ Component, pageProps }) {
	const router = useRouter();
	console.log(router.pathname);

	function getLinkClassName(path) {
		if (router.pathname === path) {
			return NavbarStyles.linkActive;
		} else {
			return NavbarStyles.linkInactive;
		}
	}

	const homeClassName = getLinkClassName('/');
	const aboutClassName = getLinkClassName('/about');
	const productsClassName = getLinkClassName('/products');

	return (
		<>
			<nav className={NavbarStyles.navbar}>
				<ul>
					<li>
						<Link href='/' className={homeClassName}>
							Home
						</Link>
					</li>
					<li>
						<Link href='/about' className={aboutClassName}>
							About
						</Link>
					</li>
					<li>
						<Link href='/products' className={productsClassName}>
							Products
						</Link>
					</li>
				</ul>
				<span className={NavbarStyles.logo}>The Soap Factory</span>
			</nav>
			<header className={HeroStyles.hero}></header>
			<Component {...pageProps} />
		</>
	);
}
