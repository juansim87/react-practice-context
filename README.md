# 🧪 Ejercicios de Context y comunicación entre componentes

## 🌟 Objetivo
Aprender a crear y usar **Context** en React para **compartir estado y funciones entre componentes** sin prop drilling. Practicarás `createContext`, `useContext`, proveedores anidados y custom hooks para casos típicos de una web real (tema, usuario, idioma, carrito, notificaciones, etc.).  
Intenta resolver **sin IA**. Si te atascas, busca en la documentación de React y recursos en internet. Si tras intentarlo sigues bloqueado, entonces sí, pregúntame. ¡Tú puedes! 💪

---

## 🚀 Pasos iniciales

### 1. Crear un nuevo repositorio en tu propia cuenta de GitHub
Sube tu código con commits claros (uno por ejercicio o bloque), como hiciste en clases anteriores.

### 2. Crear un proyecto React vacío
Usa **Vite** con JavaScript:
```bash
npm create vite@latest context-exercise -- --template react
cd context-exercise
npm install
```

### 3. Limpiar el proyecto

Elimina el boilerplate (logos, estilos por defecto). Deja `main.jsx`, `App.jsx` y tu estructura mínima.

### 4. Realiza el ejercicio

Trabaja en tu repo. Renderiza **un ejercicio a la vez** desde **`App.jsx`**.

---

## ✅ Requisitos

-   Código en **inglés** (nombres de variables, funciones y JSX).
-   Commits constantes y **inglés** siguiendo Git Flow y Github Flow.
-   Estilo: **simple y ordenado** (UI mínima, foco en la lógica).
-   Estructuras a usar: **`Context API, useContext, ContextProvider`** en todas sus variantes).
-   Trabaja en tu repo y organiza tus Providers en la carpeta `context`.
-   Mostrar el **resultado en pantalla** (no en consola).


---

## 📝 Ejercicios

Crea lo que se pide en cada uno de los ejercicios, tanto contextos como componentes.

> Puedes modificar todas las estructuras de datos a tu gusto, añadir o quitar propiedades. Siéntete libre de ser creativo y hacerlos más interesantes.
### 1) ThemeContext — Light/Dark toggle
- **Descripción:** Crea un `ThemeContext` que comparta `theme: "light" | "dark"` y `toggleTheme()`. Un botón cambia el tema. Varios componentes “hijos” consumen el contexto para mostrar estilos/textos diferentes.
- **Resultado esperado:** Un interruptor **Light/Dark** y UI que cambia de aspecto y etiqueta (“Light mode”/“Dark mode”). Debes cambiar algunos estilos de tu web según el tema. Como mínimo, cambia el color de fondo y el color del texto.

---

### 2) UserContext — Login state
- **Descripción:** Crea un `UserContext` con `user` (objeto o `null`) y funciones `login()`/`logout()`. Un formulario simple establece `user.name`. Distintos componentes muestran "Bienvenido, Pepe o 'Invitado'” en caso de que no haya usuario.

- **Datos de ejemplo:** Usuario `{ id: 1, name: "Carmen", surname: "López", role: "admin" }`.
- **Resultado esperado:** Al iniciar sesión, se muestra un mensaje de bienvenida al usuario logueado; al cerrar sesión, vuelve a “Invitado”. Además, si el rol es admin, muestra un botón de "Administrar" que solo aparece para administradores. (no necesita lógica este botón, solo que se muestre/oculte).

---

### 3) LanguageContext — i18n básico
- **Descripción:** Crea un `LanguageContext` con `lang: "en" | "es"` y `setLang()`. Un selector cambia el idioma. Componentes hijos muestran textos según idioma.
- **Pistas:**  
  ```js
  // En el Context puedes definir los textos en un objeto y añadirlos al valur en el Provider:
  const texts = {
    en: { hello: "Hello", cart: "Cart" },
    es: { hello: "Hola", cart: "Carrito" }
  };

  ```
  
  - En un componente hijo:  
   ```js
  // Luego puedes acceder a los textos según el idioma
   const { texts } = useContext(LanguageContext);
   texts[lang].hello
   ```
- **Resultado esperado:** Añade un select, que modifique el contexto con el idioma seleccionado. Los idiomas del select debes leerlos del contexto. Una vez que cambies el idioma, se actualizan textos en toda la UI inmediatamente.

---

### 4) CartContext — Cart count & items
- **Descripción:** Crea un `CartContext` con `{ items, addItem, removeItem, clearCart }`. Muestra un **contador** de ítems en la barra de navegación o en la parte superior de tu web y el **carrito completo** en `<Cart />`.

Botones para añadir/eliminar.
- **Pistas:**  
  - `items` es un array de `{ id, name, qty }`.  
  - `addItem(product)` aumenta `qty` si ya existe; si no, añade el producto al carrito.
  - `removeItem(id)` disminuye `qty` o elimina si llega a 0.
- **Datos de ejemplo:**
  ```js
  const sampleProducts = [
    { id: "product_1", name: "Camiseta de Batman" },
    { id: "product_2", name: "Sudadera: 'Soy un super héroe por haber completado el ejercicio del Contexto'" },
    { id: "product_3", name: "Vans" }
  ];
  ```
- **Resultado esperado:** El icono del carrito muestra el total de productos y el componente `<Cart>` muestra la lista de productos y la cantidad. Las acciones se reflejan en pantalla.

---

## 🤑 Bonus

### 5) [BONUS] PermissionsContext — permisos por rol
- **Descripción:** Crea un `PermissionsContext` con el `role` del usuario (`"guest" | "user" | "admin"`) y una función `can(action)` que responda `true/false`. Usa `UserContext` del ejercicio 2 o simula un usuario con rol.
- **Pistas:**  
  ```js
  const permissions = {
    guest: { view: true, edit: false, delete: false },
    user:  { view: true, edit: true,  delete: false },
    admin: { view: true, edit: true,  delete: true }
  };
  ```
  - `can(action)` devuelve `permissions[role][action]`.  
  - Componentes como `<EditButton/>`, `<DeleteButton/>` leen `can(...)` y se deshabilitan/ocultan.
- **Resultado esperado:** Cambiar el rol modifica botones/acciones visibles en la UI. Un administrador puede ver y editar todo, un usuario normal solo puede ver y editar su carrito, y un invitado solo puede ver pero no añadir al carrito. Tendrás que modificar el resultado del ejercicio 4 para que se adapte a este contexto. Y también tendrás que modificar el resultado del ejercicio 2 para que se adapte a este contexto. Puedes falsear el rol desde el login del ejercicio 2 añadiendo un select para elegir el rol del usuario.