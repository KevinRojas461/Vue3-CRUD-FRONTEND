// app.js o Main.js/ts en Vue

// laravel-vue > resources > views > app.blade.php => es el componente principal
// para el lado de Laravel
import { createApp } from "vue";
// importamos el componente principal de VUE
// dentro del componente principal de Laravel
// el componente principal de Laravel es lo que ejecuta las cosas de laravel
// el componente principal de VUE es lo que ejecuta las cosas de VUE
import App from "./App.vue";

import axiosInstance from "./plugins/axios";
import VueAxios from "vue-axios";
// import { createRouter, createWebHistory } from "vue-router";

// importar las rutas de routes.js
import router from "./routes.js";

// Crear una instancia del enrutador con createRouter y createWebHistory
// const router = createRouter({
//     history: createWebHistory(),
//     routes: routes,
// });

// Vue en una aplicación Laravel donde se podría necesitar acceso a Vue
// desde scripts externos o en diferentes partes de tu aplicación sin
// necesidad de importar Vue en cada archivo.

// es el punto de entrada para tu aplicación Vue.
// Crear la aplicación Vue
const app = createApp(App);

// usar axios en "toda tu aplicación".
// para no tener que importar axios en cada archivo .vue
// this.axios con axios global
// axios sin axios global
app.config.globalProperties.$axios = axiosInstance;

// usar las rutas que cree en routes.js
app.use(router);
// se utilizan para registrar plugins en Vue.js. Estos plugins amplían
// la funcionalidad de Vue y los hacen disponibles en "toda tu aplicación".

// Usar axios en la aplicación
app.use(VueAxios, axiosInstance);

// app.blade.php <div id="app"> ok
// es para que la pagina principal de vue se ejecute dentro de la pagina principal
// de laravel

// Esta opción le dice a Vue que monte la instancia de Vue en
// el elemento HTML con el ID app. En tu archivo Blade (app.blade.php)

// Monta la aplicación Vue en el elemento con ID app

// Montar la aplicación en el elemento con id "app"
app.mount("#app");
