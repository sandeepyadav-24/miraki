export const addToCart = (item: any) => {
  // Basic implementation - you can enhance this based on your needs
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
};
