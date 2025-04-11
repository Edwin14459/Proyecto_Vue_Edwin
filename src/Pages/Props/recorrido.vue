<script>
export default {
    data() {
        return {
            // Datos del alumno
            alumnos: [
                { nc: 12345, nombre: "Edwin", carrera: "ISC" },
                { nc: 12346, nombre: "Juan", carrera: "TICS" },
                { nc: 12347, nombre: "Pedro", carrera: "ISC" },
                { nc: 12348, nombre: "Luis", carrera: "ISC" }
            ]
        }
    }
}
</script>

<template>
    <div class="container mt-4">
        <h3 class="text-center bg-violet text-white p-3 rounded">Lista de alumnos</h3>
        <ul class="list-group list-unstyled">
            <li v-for="alumno in alumnos" :key="alumno.nc" class="bg-dark text-white p-3 rounded mb-3">
                <strong>{{ alumno.nombre }}</strong> - 
                <strong>{{ alumno.carrera }}</strong>
            </li>
        </ul>
    </div>
</template>

<style>
.bg-violet {
    background-color: violet !important;
}
</style>