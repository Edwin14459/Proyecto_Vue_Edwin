<script setup>
import Hijo1 from './Hijo1.vue';
import Hijo2 from './Hijo2.vue';
</script>

<template>
        <div class="container mt-5">
        <h1 class="title">Soy el componente padre</h1>
        
        <div class="children">
            <Hijo1 class="child-card" edad="22" />
            <Hijo2 class="child-card" edad="8" />
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    background: #f4f970;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
