<script>
export default {
    data() {
        return {
            personas: [
                { id: 1, nombre: "Edwin López Santiago", gusto: "Le gusta Dormir" },
                { id: 2, nombre: "Jhonny Garcia Hernandez", gusto: "Le gusta Jugar" },
                { id: 3, nombre: "Manuel España Silva", gusto: "Le gusta Comer" },
                { id: 5, nombre: "Erika Santiago López", gusto: "Le gusta Cocinar" },
                { id: 6, nombre: "Aure López Feria", gusto: "Le gusta Cantar" },
                { id: 7, nombre: "Saul López Bautista", gusto: "Le gusta Programar" },
                { id: 8, nombre: "Jhonny Manuel López Santiago", gusto: "Le gusta Trabajar"},
                { id: 8, nombre: "Jaqueline López Santiago", gusto: "Le gusta Dormir"},
                { id: 8, nombre: "Julissa Jóse Cruz", gusto: "Le gusta Hablar"}
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <h3 class="mt-4">LISTA DE PERSONAS</h3>
        <ul>
            <li v-for="persona in personas" :key="persona.id">
                <div class="title">
                    <strong>{{ persona.id }}</strong> -
                    <strong>{{ persona.nombre }}</strong>
                </div>
                <div class="description">{{ persona.gusto }}</div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    max-width: 750px;
    margin: 2rem auto;
    padding: 2rem;
    background: #4f46e5;
    border-radius: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    color: rgb(246, 241, 227);
    text-align: center;
}

h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: rgb(246, 241, 227);
    font-weight: bold;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background: white;
    color: #000000;
    margin: 0.5rem 0;
    padding: 0.75rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;
}

.description {
    font-style: italic;
    margin-top: 0.25rem;
    font-size: 1rem;
}
</style>
