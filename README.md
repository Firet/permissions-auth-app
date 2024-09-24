
## 🔵 Aplicación Web con Login Y Roles. 

Esta es una App con un sistema de autenticación con roles.

- Hay dos tipos de usuarios diferentes, el usuario con el rol "admin" puede realizar operaciones de creación, edición y eliminación, mientras que el usuario común solo tiene acceso a la lectura de datos. 
- Se usó Context API para determinar los roles del usuario.
- Se utilizó react-router para mostrar u ocultar rutas a determinados usuarios.
- Se accede a info obtenida desde esta [API](https://jsonplaceholder.typicode.com/).
- La info obtenida en la API se guarda en el estado global usando Redux.
- Se usó flexbox para se vea bien en diferentes tipos de patanllas: monitores grandes🖥️, celulares📱 y laptops💻. 
- Los elementos visuales se probaron en varios navegadores.
- Se instaló prettier para hacer que el código sea consistente a través de toda la aplicación.

## Estructura de Carpetas
- /auth: acá guardé todos los componentes relacionados con la autenticación
- /types: acá van los tipos y las interfaces
- /pages: las diferentes vistas de la app
- /hooks: en esta carpeta está el hook useAuth
- redux: carpeta de dicada a componentes de redux: action y reducers
- /components: acá están todos los componentes reusables, generalmente los organizo según los principios de Atomic Design pero esta vez no tuve tiempo

## 🏃‍♂️¿Cómo correr esta app?

🚀 Primero, levantá el servidor de desarrollo:

```bash
npm run dev
```

💻 Después, podés abrir [localhost:5173](http://localhost:5173) con tu navegador para ver el resultado.
