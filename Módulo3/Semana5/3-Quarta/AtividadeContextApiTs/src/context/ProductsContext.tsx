import { createContext, useContext, useState } from "react";

interface iChildren{
    children: React.ReactNode
}

interface iProduct{
    id: number,
    title: string,
    description: string,
    price: number,
    image: string
}

interface iProviderValue{
    cart: iProduct[],
    addProduct: (product: iProduct) => void,
    deleteProduct: (productToBeDeleted: iProduct) => void
}

export const CartContext = createContext<iProviderValue>({} as iProviderValue);

export const CartProvider = ({ children }: iChildren) => {
  const [cart, setCart] = useState<iProduct[]>([]);

  const addProduct = (product: iProduct) => {
    const find = cart.find((productCart) => productCart.id == product.id)
    !find && setCart([...cart, product]);
  };

  const deleteProduct = (productToBeDeleted: iProduct) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);