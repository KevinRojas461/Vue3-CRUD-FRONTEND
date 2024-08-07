import axios from "axios";

// se utiliza para crear una instancia personalizada de Axios. Esto te permite
// configurar Axios con ajustes predeterminados que se aplicarán a todas las
// solicitudes realizadas con esta instancia específica.
const axiosInstance = axios.create({
  // withCredentials: true, // Para enviar cookies con las solicitudes, si es necesario
  // no es necesario ponerle baseURL ni headers
  // timeout: 10000, // Tiempo de espera máximo

  // en este caso que es separado si se necesita baseURL
  // vue client y laravel server
  // baseURL es la URL/API del servidor
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
