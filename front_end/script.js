const   BASE_URL = "https://localhost:5000";

const get_products = async() => {

        const products = await fetch(`${BASE_URL}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const response = products.json();
        console.log(response);
}

get_products();


