const AboutCats = ({cat,addToList}) => {
    const onClick = (e) => {
		addToList(e);
	};
    return(
        <div className="aboutCatsPage">
            <h3>About Me</h3>
            <img src={cat.image} alt="" />
            <h2>Name: {cat.name}</h2>
            <h4>Breed: {cat.breed}</h4>
            <h4>Age: {cat.age}</h4>
            <h4>Location: {cat.city}</h4>
            <h4>Sex: {cat.gender}</h4>
            <h2>Price: £{cat.price}</h2>
            <button onClick={()=>onClick(cat)}>Add to Basket</button>
          </div>
    )
}
export default AboutCats