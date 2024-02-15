// utils/products.js

// Example product data (replace with actual data fetching logic)
type typeProps = {
  id: string;
  name: string;
  description: string;
}[];
const products: typeProps = [
  { id: "1", name: "Product 1", description: "Description of Product 1" },
  { id: "2", name: "Product 2", description: "Description of Product 2" },
  // Add more products as needed
];

export default products;

// Function to fetch all product IDs
export async function getAllProductIds() {
  // Map product IDs to the required format for getStaticPaths
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));
  return paths;
}

// Function to fetch a specific product by ID
export async function getProductById(id: any) {
  // Find the product with the specified ID
  const product = products.find((product) => product.id === id);
  return product;
}
