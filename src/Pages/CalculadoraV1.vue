<script>
export default {
    data() {
        return {
            numero1: 0,
            numero2: 0,
            resultado: 0,
        };
    },
    methods: {
        sumar() {
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        },
        restar() {
            this.resultado = parseFloat(this.numero1) - parseFloat(this.numero2);
        },
        multiplicar() {
            this.resultado = parseFloat(this.numero1) * parseFloat(this.numero2);
        },
        dividir() {
            if (this.numero2 != 0) {
                this.resultado = parseFloat(this.numero1) / parseFloat(this.numero2);
            } else {
                this.resultado = "Error";
            }
        }
    }
};
</script>

<template>
    <div class="container mt-5 d-flex justify-content-center">
        <div class="card p-4 shadow text-center" style="max-width: 400px;">
            <h2 class="mb-3 fw-bold">Calculadora V1</h2>

            <div class="mb-3">
                <label for="numero1" class="form-label fw-bold">Número 1</label>
                <input type="number" class="form-control text-center" v-model="numero1">
            </div>

            <div class="mb-3">
                <label for="numero2" class="form-label fw-bold">Número 2</label>
                <input type="number" class="form-control text-center" v-model="numero2">
            </div>

            <div class="mb-3">
                <label class="form-label fw-bold" style="color: red;">Resultado</label>
                <input type="text" class="form-control text-center bg-light fw-bold" style="color: red;"
                    v-model="resultado" disabled>
            </div>

            <div class="d-grid gap-2">
                <button @click="sumar" class="btn btn-danger fw-bold">Suma</button>
                <button @click="restar" class="btn btn-warning fw-bold">Resta</button>
                <button @click="multiplicar" class="btn btn-primary fw-bold">Multiplicación</button>
                <button @click="dividir" class="btn btn-success fw-bold">Divición</button>
            </div>
        </div>
    </div>

</template>