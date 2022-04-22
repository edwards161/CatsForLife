import {Link} from 'react-router-dom'
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
					<Link to={`/aboutCat/${cat.name}`}>Home</Link>
					{/* <button onClick={onClick}>Add to Basket</button> */}
				</div>
			))}
		</div>
		</div>
	);
}

export default App;
