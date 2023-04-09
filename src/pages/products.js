import React from 'react';
import List, { ListItem } from '../components/List';
import { products } from './products/_productsData';

export default function ProductsPage() {
	const soapList = products.map(product => {
		return (
			<ListItem
				key={product.id}
				header={product.name}
				image={`/images/${product.image}`}
				text={product.description}
				href={`/products/${product.id}`}
			/>
		);
	});

	return (
		<>
			<List>{soapList}</List>
		</>
	);
}
