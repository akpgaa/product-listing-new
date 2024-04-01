async function getAllProduct() {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => json.products)
    .catch((error) => {
      // Handle network error
      console.error("Network error:", error);
    });
}

async function getAllCategories() {
  return fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((json) => json);
}

async function getProductByCategory(category) {
  return fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((json) => json.products)
    .catch((error) => {
      // Handle network error
      console.error("Network error:", error);
    });
}
async function searchProduct(keyword) {
  return fetch(`https://dummyjson.com/products/search?q=${keyword}`)
    .then((res) => res.json())
    .then((json) => json.products)
    .catch((error) => {
      // Handle network error
      console.error("Network error:", error);
    });
}

const ProductAPI = {
  getAllProduct,
  getAllCategories,
  getProductByCategory,
  searchProduct,
};

export default ProductAPI;
