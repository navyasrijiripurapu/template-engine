let products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500,
    category: "Accessories"
  }
];

let nextId = 4;

export const getAllProducts = () => products;

export const getProductById = (id) =>
  products.find(product => product.id === Number(id));

export const createProduct = (data) => {
  const product = {
    id: nextId++,
    name: data.name,
    price: Number(data.price),
    category: data.category
  };

  products.push(product);
  return product;
};

export const updateProduct = (id, data) => {
  const product = getProductById(id);

  if (!product) return null;

  if (data.name !== undefined) product.name = data.name;
  if (data.price !== undefined) product.price = Number(data.price);
  if (data.category !== undefined) product.category = data.category;

  return product;
};

export const deleteProduct = (id) => {
  const index = products.findIndex(
    product => product.id === Number(id)
  );

  if (index === -1) return false;

  products.splice(index, 1);
  return true;
};
