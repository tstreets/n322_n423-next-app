import React from 'react';
import ListStyles from '../styles/List.module.css';
import Link from 'next/link';

function List({ children }) {
	return (
		<>
			<section className={ListStyles.list}>{children}</section>
		</>
	);
}

export function ListItem({ image, header, text, href }) {
	if (href) {
		return (
			<>
				<div className={ListStyles.item}>
					<Link href={href} className={ListStyles.image}>
						<img src={image} />
					</Link>
					<div className={ListStyles.text}>
						<Link href={href}>
							<h4>{header}:</h4>
						</Link>
						<p>{text}</p>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className={ListStyles.item}>
				<div className={ListStyles.image}>
					<img src={image} />
				</div>
				<div className={ListStyles.text}>
					<h4>{header}:</h4>
					<p>{text}</p>
				</div>
			</div>
		</>
	);
}

export default List;
