import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage('pureplatter-cart', []);
  const [favorites, setFavorites] = useLocalStorage('pureplatter-favorites', []);

  const addToCart = (menuItem, restaurant) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === menuItem.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === menuItem.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [
        ...currentItems,
        {
          ...menuItem,
          quantity: 1,
          restaurantName: restaurant.name,
        },
      ];
    });
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      setCartItems((currentItems) =>
        currentItems.filter((item) => item.id !== itemId),
      );
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
    );
  };

  const decrementItem = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity - 1);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => setCartItems([]);

  const toggleFavorite = (restaurantId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(restaurantId)
        ? currentFavorites.filter((id) => id !== restaurantId)
        : [...currentFavorites, restaurantId],
    );
  };

  const isFavorite = (restaurantId) => favorites.includes(restaurantId);

  const getItemQuantity = (itemId) =>
    cartItems.find((item) => item.id === itemId)?.quantity ?? 0;

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        favorites,
        cartCount,
        subtotal,
        addToCart,
        updateQuantity,
        decrementItem,
        removeFromCart,
        clearCart,
        toggleFavorite,
        isFavorite,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
