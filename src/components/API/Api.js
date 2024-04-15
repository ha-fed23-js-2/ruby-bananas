const baseUrl = 'https://forverkliga.se/JavaScript/api/jsonStore.php';
const key = 'masafejuja';

async function saveToApi(data) {
    const url = baseUrl + '?method=save';
    console.log('saveToApi sending request to:', url);
    console.log('With data:', JSON.stringify({ key: key, value: data }));

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key: key, value: data })
        });

        // В зависимости от content-type обрабатываем ответ
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            const responseData = await response.json();
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            console.log('Data successfully saved to API:', responseData);
            return responseData;
        } else {
            const responseText = await response.text();
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}, Message: ${responseText}`);
            console.log('Data successfully saved to API as text:', responseText);
            return { success: true, data: responseText }; // Считаем текст успешным ответом
        }
    } catch (error) {
        console.error('Error saving data to API:', error);
        return null;
    }
}




async function loadFromApi() {
    const url = baseUrl + '?method=load&key=' + key;
    console.log('loadFromApi sending request to ' + url);
    try {
        const response = await fetch(url, { method: 'GET' });
        const result = await response.json();
        console.log('loadFromApi full response:', JSON.stringify(result, null, 2));  // Вывод полного ответа для диагностики в форматированном виде

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}, Message: ${result.message}`);
        }
        // Поскольку ожидается, что результат будет прямым массивом, мы просто его возвращаем
        return result;  // Прямое возвращение массива
    } catch (error) {
        console.error('Error loading data from API:', error);
        return null;  // В случае ошибки возвращаем null
    }
}


export { saveToApi, loadFromApi };
