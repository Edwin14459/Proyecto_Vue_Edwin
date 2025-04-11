import { createRouter, createWebHashHistory } from "vue-router";

// agregando pagina de la aplicacion 
import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import Componentes from "../Pages/Componentes.vue";
import CalculadoraV1 from "../Pages/CalculadoraV1.vue";
import calculadoraV2 from "../Pages/CalculadoraV2.vue";
import recorrido from "../Pages/Props/recorrido.vue";
import Lista from "../Pages/Lista.vue";
import Eventos from "../Pages/Eventos.vue";
import Padre from "../Pages/Props/Padre.vue";
import Mihorario from "../Pages/Mihorario.vue";
import Horario from "../Pages/Horario.vue";
import Login from "../Pages/Login.vue";



const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/componentes",
        name: "componentes",
        component: Componentes,  
    },
    {
        path: "/lista",
        name: "lista",
        component: Lista,  
    },
    {
        path: "/recorrido",
        name: "recorrido",
        component: recorrido,  
    },
    {
        path: "/mihorario",
        name: "mihorario",
        component: Mihorario,  
    },
    {
        path: "/horario",
        name: "horario",
        component: Horario,  
    },
    {
        path: "/padre",
        name: "padre",
        component: Padre,
    },
    {
        path: "/eventos",
        name: "eventos",
        component: Eventos,
    },
    {
        path: "/calculadoraV1",
        name: "calculadoraV1",
        component: CalculadoraV1,
    },
    {
        path: "/calculadoraV2",
        name: "calculadoraV2",
        component: calculadoraV2,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },

]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
