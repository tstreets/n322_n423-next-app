import React from 'react';
import ListStyles from '../styles/List.module.css';

export default function ProductsPage() {
	return (
		<>
			<section className={ListStyles.list}>
				<div className={ListStyles.item}>
					<div className={ListStyles.image}>
						<img src='/images/butter-almond-soap.jpg' />
					</div>
					<div className={ListStyles.text}>
						<h4>Butter Almond Soap:</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi
							mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus
							ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate
							accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.
						</p>
					</div>
				</div>
				<div className={ListStyles.item}>
					<div className={ListStyles.image}>
						<img src='/images/rose-gold-soap.jpg' />
					</div>
					<div className={ListStyles.text}>
						<h4>Rose-Gold Soap:</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi
							mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus
							ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate
							accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.
						</p>
					</div>
				</div>
				<div className={ListStyles.item}>
					<div className={ListStyles.image}>
						<img src='/images/luxury-soap.jpg' />
					</div>
					<div className={ListStyles.text}>
						<h4>Luxury Soap:</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi
							mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus
							ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate
							accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
