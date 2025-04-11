<template>
    <div class="container">
        <div class="content-box">
            <h4 class="subtitle">Rutas</h4>
            <h1 class="main-title">BIENVENIDO A LA PÁGINA</h1>
            <p class="nombre">Edwin López Santiago</p>
            <p class="description">Esta es la página de Home</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-box {
    background-color: white;
    padding: 3rem;
    border-radius: 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 600px;
    width: 100%;
}

.subtitle {
    color: #0a66c2;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

.main-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 1.5rem;
}

.nombre {
    font-size: 1.2rem;
    color: #000000;
    margin-bottom: 0.5rem;
}

.description {
    font-size: 1rem;
    color: #081cfd;
    font-weight: bold;
    animation: alternate;
}

</style>