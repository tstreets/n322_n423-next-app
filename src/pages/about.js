import React from 'react';
import List, { ListItem } from '../components/List';

export default function AboutPage() {
	return (
		<>
			<List>
				<ListItem
					image='/images/owner.jpg'
					header='The Owner'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis.'
				/>

				<ListItem
					image='/images/co-owner.png'
					header='The Co-Owner'
					text='Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.'
				/>
			</List>
		</>
	);
}
