const baseUrl = 'https://forverkliga.se/JavaScript/api/jsonStore.php'
const key = 'masafejuja'

async function saveToApi(box) {
	const url = baseUrl + '?method=save'
	console.log('saveToApi sending request to ' + url);
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key: key,
			value: box  
		})
	});
	console.log('saveToApi response ok? ', response.ok);
}

async function loadFromApi() {
    const url = baseUrl + '?method=load&key=' + key;
    try {
        const response = await fetch(url, { method: 'GET' });
        const result = await response.json();
        console.log('loadFromApi response:', result);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return result;
    } catch (error) {
        console.error('Error loading data from API:', error);
        return null;  }
}


export { saveToApi, loadFromApi }
