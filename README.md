E-commerce React + Firebase (SPA)

Front-end de un e-commerce construido como Single Page Application con React, React Router y Context API para el carrito. Los productos se leen desde Firestore y al confirmar la compra se genera una orden en la colección orders.
Cumple con: listado/detalle, navegación SPA, contador con límite por stock, carrito con totales, checkout y orderId.

Stack

Vite + React 18
React Router v6
Context API + useReducer (carrito)
Firebase v10 – Firestore

Funcionalidades

Listado de productos (Home) dinámico desde Firestore.
Filtro por categoría: rutas /category/:categoryId (consulta con where).
Detalle de producto: ruta /item/:id (por docId real de Firestore).

ItemCount con validaciones:
mínimo 1
máximo por “stock” 10 por producto en total (no permite superar 10 aunque entres/salgas de la PDP).
tras “Agregar”, se oculta y aparecen CTAs “Ir al carrito / Seguir comprando”.

Carrito (Context):
guarda ítems y cantidades, permite quitar y vaciar,
muestra subtotal por ítem y total general,
CartWidget (icono) con total de unidades.

Checkout:
persiste una orden en orders (Firestorm) con detalles,
muestra el id de la orden al usuario.

UX:
loaders y estados vacíos: “Cargando…”, “No hay productos…”, “Producto no encontrado”, “Sin stock” si se alcanza el tope de 10.


