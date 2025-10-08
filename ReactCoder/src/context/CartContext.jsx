import { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { item, qty } = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      let items;
      if (existing) {
        items = state.items.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i);
      } else {
        items = [...state.items, { ...item, qty }];
      }
      return { ...state, items };
    }
    case 'REMOVE': {
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    }
    case 'CLEAR': {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const totalItems = useMemo(
    () => state.items.reduce((acc, it) => acc + it.qty, 0),
    [state.items]
  );
  const totalAmount = useMemo(
    () => state.items.reduce((acc, it) => acc + it.qty * Number(it.price || 0), 0),
    [state.items]
  );

  const value = {
    items: state.items,
    totalItems,
    totalAmount,
    addItem: (item, qty) => dispatch({ type: 'ADD', payload: { item, qty } }),
    removeItem: (id) => dispatch({ type: 'REMOVE', payload: id }),
    clear: () => dispatch({ type: 'CLEAR' }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return ctx;
}
