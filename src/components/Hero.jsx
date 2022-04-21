import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

const numCats = 4;
const minPrice = 100;
const maxPrice = 500;
const newCats = [];

function App() {
	const [cats, setCat] = useState([]);
	const [error, setError] = useState(null);


	useEffect(() => {
		const fetchCats = async () => {
			try {

				const response = await fetch(
					'https://api.thecatapi.com/v1/images/search?limit=4',
				);
				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const catImages = await response.json();
				// setCat(data);

				for (let i = 0; i < numCats; i++)
				{
				  const catName = faker.name.firstName();
				  const catPrice = faker.commerce.price(minPrice, maxPrice, 0, "£");
				  const catImage = catImages[i].url;
				  const newCat = {name: catName, price: catPrice, image: catImage};
				  newCats.push(newCat);
				}
				setCat(newCats);


			} catch (err) {
				setError('Could not fetch data');
				console.log(err.message);
			}
		};
		fetchCats(numCats);
	}, []);

	const onClick = () => {
		// addToBasket({ id, name, price, image });
	};

	return (
		<div className="gallery">
		<div className="tile">
			{cats.map((cat, index) => (
				<div key={index}>
          			<h2>{cat.name}</h2>
					<img src={cat.image} alt="cat mug shot" />
					<button onClick={onClick}>Add to Basket</button>
				</div>
			))}
		</div>
		</div>
	);
}

export default App;
