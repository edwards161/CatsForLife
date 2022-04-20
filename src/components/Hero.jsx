import { useEffect, useState } from 'react';

function App() {
	const [cats, setCat] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCats = async () => {
			try {
				const response = await fetch(
					'https://api.thecatapi.com/v1/images/search',
				);
				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const data = await response.json();
				setCat(data);
			} catch (err) {
				setError('Could not fetch data');
				console.log(err.message);
			}
		};
		fetchCats();
	}, []);

	return (
		<div className="App">
			{cats.map((cat, index) => (
				<div key={index}>
					{error && <p>{error}</p>}
          <h2>{cat.id}</h2>
					<img src={cat.url} alt="cat mug shot" />
				</div>
			))}
		</div>
	);
}

export default App;
