import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection, getDocs, doc, getDoc, addDoc, serverTimestamp,
  query, where
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function fetchProducts(categoryId) {
  const col = collection(db, 'products');
  const q = categoryId ? query(col, where('category', '==', categoryId)) : col;
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ ...d.data(), id: d.id }));
}

export async function fetchProductById(id) {
  const ref = doc(db, 'products', id);
  const snap = await getDoc(ref);
  return snap.exists() ? ({ ...snap.data(), id: snap.id }) : null;
}

export async function createOrder({ buyer, items, total }) {
  const ref = await addDoc(collection(db, 'orders'), {
    buyer, items, total, createdAt: serverTimestamp()
  });
  return ref.id;
}
