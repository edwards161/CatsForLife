import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

const numCats = 4;
const minPrice = 100;
const maxPrice = 500;
const newCats = [];

function App({catData}) {



	const onClick = () => {
		// addToBasket({ id, name, price, image });
	};

	return (
		<div className="gallery">
		<div className="tile">
			{catData.map((cat, index) => (
				<div key={index}>
          			<h2>{cat.name}</h2>
					<img src={cat.image} alt="cat mug shot" />
					{/* <button onClick={onClick}>Add to Basket</button> */}
				</div>
			))}
		</div>
		</div>
	);
}

export default App;
