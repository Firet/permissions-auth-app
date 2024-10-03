Podés ver y probar esta app acá: [https://auth-app-demo.vercel.app/](https://auth-app-demo.vercel.app/)


## 🔵 Aplicación Web con Login Y Roles.

Esta es una App web con un sistema de autenticación con roles.

-   Hay dos tipos de usuarios diferentes: el usuario con el rol "admin" puede realizar operaciones de creación, edición y eliminación, mientras que el usuario común solo tiene acceso a la lectura de datos.
-   Usé Context API para determinar los roles del usuario.
-   Utilicé react-router para mostrar u ocultar rutas a determinados usuarios.
-   Se accede a información obtenida desde esta [API](https://jsonplaceholder.typicode.com/).
-   La información obtenida en la API la guardé en el estado global usando Redux.
-   Con flexbox garanticé que se vea bien en diferentes tipos de patanllas: monitores grandes🖥️, celulares📱 y laptops💻.
-   Usé Material y Emotion CSS(parecido a styled components)
-   Los elementos visuales se probaron en varios navegadores.
-   Corrí prettier para hacer que el código sea consistente a través de toda la aplicación.

## Estructura de Carpetas

-   /auth: donde guardé todos los componentes relacionados con la autenticación
-   /types: guardé los tipos y las interfaces
-   /hooks: en esta carpeta está el hook useAuth
-   redux: carpeta dedicada a componentes de redux: action y reducers
-   /components: donde guardé todos los componentes, están organizados en subcarpetas según los principios de Atomic Design

## 🏃‍♂️¿Cómo correr esta app?

🚀 Primero, levantá el servidor de desarrollo:

```bash
npm install
npm run dev
```

💻 Después, podés abrir [localhost:5173](http://localhost:5173) con tu navegador para ver el resultado.
