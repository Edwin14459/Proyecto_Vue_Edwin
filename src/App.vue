<script>
export default {
    name: "App",
};
</script>

<template>
    <div class="container">
        <div id="app">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Barra de Navegación</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <!-- Pagina de Home -->
                            <li class="nav-item" key="home">
                                <router-link class="nav-link" to="/">Home</router-link>
                            </li>
                            <!-- Pagina de About -->
                            <li class="nav-item" key="about">
                                <router-link class="nav-link" to="/about">About</router-link>
                            </li>
                            <!-- Pagina de Componentes-->
                            <li class="nav-item" key="componentes">
                                <router-link class="nav-link" to="/componentes">Componentes</router-link>
                            </li>
                            <!-- Dropdown de Listas -->
                            <li class="nav-item dropdown" key="lista">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Listas
                                </a>
                                <ul class="dropdown-menu">
                                    <li key="recorrido">
                                        <router-link class="dropdown-item" to="/recorrido">Recorrido</router-link>
                                    </li>
                                    <li key="lista">
                                        <router-link class="dropdown-item" to="/lista">Lista</router-link>
                                    </li>
                                </ul>
                            </li>
                            <!-- Dropdown de Horario -->
                            <li class="nav-item dropdown" key="horario">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Horario
                                </a>
                                <ul class="dropdown-menu">
                                    <li key="horario">
                                        <router-link class="dropdown-item" to="/horario">Horario</router-link>
                                    </li>
                                    <li key="lista">
                                        <router-link class="dropdown-item" to="/mihorario">Mi Horario</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item" key="padre">
                                <router-link class="nav-link" to="/padre">Padre</router-link>
                            </li>
                            <!-- Eventos -->
                            <li class="nav-item" key="eventos">
                                <router-link class="nav-link" to="/eventos">Eventos</router-link>
                            </li>
                            <!-- Dropdown de Calculadora -->
                            <li class="nav-item dropdown" key="calculadora">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Calculadora
                                </a>
                                <ul class="dropdown-menu">
                                    <li key="calculadorav1">
                                        <router-link class="dropdown-item" to="/calculadorav1">Calculadora
                                            V1</router-link>
                                    </li>
                                    <li key="calculadorav2">
                                        <router-link class="dropdown-item" to="/calculadoraV2">Calculadora
                                            V2</router-link>
                                    </li>
                                </ul>
                            </li>
                            <!-- Login -->
                            <li class="nav-item" key="login">
                                <router-link class="nav-link" to="/login">Login</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav> -->
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
/* centrado del submeni */
.dropdown-menu .dropdown-item {
    text-align: center;
}

/* Color de fondo */
.container {
    background-color: #fefff4;
    /* Puedes cambiar este color según prefieras */
    padding: 1rem;
    border-radius: 10px;
}

body {
    background-color: #daebfc;
    /* Azul claro como en tu borde lateral */
}


.navbar {
    background: linear-gradient(90deg, #0d6efd 0%, #0a58ca 100%);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 0.75rem 1.5rem;
    margin-top: 1rem;
    color: white;
}

.navbar-brand {
    font-weight: bold;
    font-size: 1.6rem;
    color: #ffffff;
}

.navbar-brand:hover {
    color: #e0e0e0;
}

.navbar-nav .nav-link {
    color: #ffffff;
    font-weight: 500;
    margin-right: 10px;
    transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.router-link-exact-active {
    color: #ffcc00;
}

.nav-item.dropdown .dropdown-menu {
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    padding: 0.5rem 0;
    background-color: #ffffff;
}

.dropdown-item {
    font-weight: 500;
    color: #333;
    transition: background-color 0.2s ease, color 0.2s ease;
}

.dropdown-item:hover {
    background-color: #f1f1f1;
    color: #ff0000;
}

.navbar-toggler {
    border: none;
    background-color: #ffffff;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
}

.navbar-toggler-icon {
    filter: invert(1);
}
</style>
