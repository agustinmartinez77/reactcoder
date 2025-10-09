import { createContext, useContext, useMemo, useReducer, useEffect } from 'react';

const CartContext = createContext(null);
const CART_KEY = 'tienda_cart_v1';     // clave en localStorage
const MAX_PER_PRODUCT = 10;

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { item, qty } = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      const current = existing?.qty ?? 0;
      const remaining = Math.max(0, MAX_PER_PRODUCT - current);
      const toAdd = Math.min(Math.max(0, Number(qty || 0)), remaining);
      if (toAdd <= 0) return state;

      const items = existing
        ? state.items.map(i => (i.id === item.id ? { ...i, qty: i.qty + toAdd } : i))
        : [...state.items, { ...item, qty: toAdd }];

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
  const [state, dispatch] = useReducer(
    reducer,
    undefined,
    () => {
      try {
        const raw = localStorage.getItem(CART_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        if (parsed && Array.isArray(parsed.items)) return { items: parsed.items };
      } catch {}
      return { items: [] };
    }
  );

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const totalItems = useMemo(
    () => state.items.reduce((acc, it) => acc + it.qty, 0),
    [state.items]
  );
  const totalAmount = useMemo(
    () => state.items.reduce((acc, it) => acc + it.qty * Number(it.price || 0), 0),
    [state.items]
  );

  const getItemQuantity = (id) => state.items.find(i => i.id === id)?.qty ?? 0;

  const value = {
    items: state.items,
    totalItems,
    totalAmount,
    getItemQuantity,
    addItem: (item, qty) => dispatch({ type: 'ADD', payload: { item, qty } }),
    removeItem: (id) => dispatch({ type: 'REMOVE', payload: id }),
    clear: () => dispatch({ type: 'CLEAR' }),
    MAX_PER_PRODUCT,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart debe usarse dentro de <CartProvider>');
  return ctx;
}
