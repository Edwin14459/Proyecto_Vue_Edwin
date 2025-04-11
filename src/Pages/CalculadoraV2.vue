<script>
export default {
    data() {
        return {
            display: '',
            currentValue: 0,
        };
    },
    methods: {
        agregarNumero(numero) {
            this.display += numero;
        },

        calculo() {
            try {
                this.currentValue = new Function(`return ${this.display}`)();
                this.display = this.currentValue.toString();
            } catch (error) {
                this.display = "Error";
            }
        },

        limpiardisplay() {
            this.display = '';
        },

        eliminarNumero() {
            this.display = this.display.slice(0, -1);
        },

        calcularPorcentaje() {
            if (this.display !== '' && !isNaN(parseFloat(this.display))) {
                this.display = (parseFloat(this.display) / 100).toString();
            }
        }
    }
};
</script>

<template>
    <div class="container mt-5 d-flex justify-content-center" style="height: 380;">
        <div class="card p-4 shadow text-center" style="width: 280px; background-color: #FFC6B5; border: 0.5px solid black;">
            <div class="card-body">
                <h6 class="text-center">Calculadora V2</h6>
                <div class="mb-3">
                    <input type="text" class="form-control text-end" v-model="display" disabled>
                </div>

                <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-warning btn-calculadora" @click="calcularPorcentaje">%</button>
                    <button class="btn btn-danger btn-calculadora" @click="limpiardisplay">CE</button>
                    <button class="btn btn-danger btn-calculadora" @click="limpiardisplay">C</button>
                    <button class="btn btn-danger btn-calculadora" @click="eliminarNumero">
                        <img src="https://cdn-icons-png.flaticon.com/512/2087/2087825.png" alt="Eliminar" width="18"
                            height="18">
                    </button>
                </div>

                <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('7')">7</button>
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('8')">8</button>
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('9')">9</button>
                    <button class="btn btn-primary btn-calculadora" @click="agregarNumero('/')">/</button>
                </div>

                <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('4')">4</button>
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('5')">5</button>
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('6')">6</button>
                    <button class="btn btn-primary btn-calculadora" @click="agregarNumero('*')">x</button>
                </div>

                <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('1')">1</button>
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('2')">2</button>
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('3')">3</button>
                    <button class="btn btn-primary btn-calculadora" @click="agregarNumero('-')">-</button>
                </div>

                <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('0')">0</button>
                    <button class="btn btn-secondary btn-calculadora" @click="agregarNumero('.')">.</button>
                    <button class="btn btn-success btn-calculadora" @click="calculo">=</button>
                    <button class="btn btn-primary btn-calculadora" @click="agregarNumero('+')">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.btn-calculadora {
    width: 100%;
    height: 40px;
    margin: 2px;
    font-size: 18px;
    border: 1px solid black;
}

.btn-secondary {
    background-color: #f8f9fa;
    color: #000;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
}

.btn-danger {
    background-color: #dc3545;
    color: #fff;
}

.btn-success {
    background-color: #28a745;
    color: #fff;
}

.btn-warning {
    background-color: #ffc107;
    color: #000;
}
</style>
