You can see and check this app here: [https://auth-app-demo.vercel.app/](https://auth-app-demo.vercel.app/)


## 🔵 Login Web App.

This is a web app with a role-based authentication system.
You can clone this repo and use it in your app-


## Features
- There are two different types of users: the user with the “admin” role can perform create, edit and delete operations, while the common user only has access to read data.
- I used Context API to determine the user roles.
- I used react-router to show or hide routes to certain users.
- I obtained information from this [API](https://jsonplaceholder.typicode.com/)
- The information obtained from the API is stored in the global state using Redux.
- With flexbox I ensured that it looks good on different types of devices: big screens🖥️, cell phones📱 and laptops💻.
- I used Material and Emotion CSS (similar to styled components).
- The visual elements were tested in several browsers.
- I ran prettier to make the code consistent throughout the application.

## Folder structure

- /auth: where I stored all the components related to authentication
- /types: where I stored the types and interfaces
- /hooks: in this folder is the hook useAuth
- redux: folder dedicated to redux components: action and reducers
- /components: where I saved all the components, they are organized in subfolders according to the Atomic Design principles.



## 🏃‍♂️How to run this app?

🚀 First, launch the development server:

```bash
npm install
npm run dev
```

💻 Then, you can open [localhost:5173](http://localhost:5173) with your browser to see the result.
