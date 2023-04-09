import '../styles/globals.css';
import Link from 'next/link';
import NavbarStyles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import HeroStyles from '../styles/Hero.module.css';
import Modal from '../components/Modal';

export default function App({ Component, pageProps }) {
	const router = useRouter();

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
			<main className='content'>
				<Component {...pageProps} />
			</main>
			<footer>
				<ul className={NavbarStyles.footer}>
					<li>&copy; The Soap Factory</li>
					<li>
						<Modal trigger='Terms and Conditions'>Long list of terms and conditions.</Modal>
					</li>
				</ul>
			</footer>
		</>
	);
}
