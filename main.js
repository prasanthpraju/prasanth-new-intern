 
// all products
async function fetchProducts() {
    try {
        const response = await fetch("http://localhost:5000/products");
        const products = await response.json();
        const container = document.getElementById("productsContainer");

        container.innerHTML = ""; // Clear previous content

        products.forEach(product => {
            console.log("Product:", product);
            
            const card = `
                <div class="box">
                    <img src="${product.image }" alt="${product.name}">
                    <h3>${product.name} </h3>
                    <div class="price">$${product.price} <span>$${ (product.price * 1.2).toFixed(2)}</span></div>
            
                </div>
            `;
            
            container.innerHTML += card;
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}



fetchProducts();






