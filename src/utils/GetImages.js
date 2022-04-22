const GetImage = async () => {
	try {
		const response = await fetch(
			'https://api.thecatapi.com/v1/images/search?limit=8',
		);
        if (!response.ok) {
            throw new Error(response.statusText);
        }

		const res = await response.json();
		return res;
	} catch (err) {
		console.error(`${err.message}`);
	}
};

export default GetImage;