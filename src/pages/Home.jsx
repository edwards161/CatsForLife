import {Link} from 'react-router-dom'
function App({catData,addToList}) {



	const onClick = (e) => {
		addToList(e);
	};

	return (
		<div className="gallery">
		<div className="tile">
			{catData.map((cat, index) => (
				<div key={index}>
          			<h2>{cat.name}</h2>
					<img src={cat.image} alt="cat mug shot" />
					<div>
					<Link to={`/aboutCat/${cat.name}`}>About Me</Link>
					<button onClick={()=>onClick(cat)}>Add to Basket</button>
					</div>
				</div>
			))}
		</div>
		</div>
	);
}

export default App;
