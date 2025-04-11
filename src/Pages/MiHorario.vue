<template>
  <div class="container mt-5">
    <div class="card shadow-lg">
      <div class="card-header bg-primary text-white text-center">
        <h3 class="mb-0">
          <i class="bi bi-calendar-week me-2"></i>MI HORARIOS DE CLASE - INGENIERÍA EN SISTEMAS 
        </h3>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-dark">
              <tr>
                <th v-for="(header, i) in headers" :key="i" class="text-center">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(h, index) in Horario" :key="index" class="align-middle">
                <td class="fw-bold text-center bg-light">{{ h.hora }}</td>
                <td v-for="(day, i) in days" :key="i" class="text-center" :class="getCellClass(day, h[day])">
                  {{ h[day] || '' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const headers = ['Hora', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

const Horario = ref([
  { hora: '7:00 AM - 9:00 AM', lunes: 'Programación Lógica y Funcional', martes: 'Inteligencia Artificial', miercoles: 'Desarrollo Ágil', jueves: 'Programación Lógica y Funcional', viernes: '' },
  { hora: '9:00 AM - 11:00 AM', lunes: 'Desarrollo Ágil', martes: 'Administración de Redes', miercoles: '', jueves: 'Administración de Redes', viernes: '' },
  { hora: '10:00 AM - 11:00 AM', lunes: '', martes: '', miercoles: '', jueves: '', viernes: 'Desarrollo Ágil' },
  { hora: '11:00 AM - 13:00 PM', lunes: '', martes: 'Desarrollo en la Nube', miercoles: 'Desarrollo en la Nube', jueves: 'Inteligencia Artificial', viernes: '' },
  { hora: '13:00 PM - 14:00 PM', lunes: '', martes: '', miercoles: '', jueves: 'Desarrollo con Realidad Aumentada', viernes: '' },
  { hora: '14:00 PM - 16:00 PM', lunes: '', martes: '', miercoles: '', jueves: '', viernes: 'Taller de Investigación II' },
  { hora: '15:00 PM - 17:00 PM', lunes: '', martes: 'Desarrollo con Realidad Aumentada', miercoles: 'Taller de Investigación II', jueves: '', viernes: '' }
]);

const getCellClass = (day, value) => {
  if (!value) return '';
  return {
    lunes: 'bg-info text-white',
    martes: 'bg-success text-white',
    miercoles: 'bg-warning',
    jueves: 'bg-danger text-white',
    viernes: 'bg-purple text-white'
  }[day] || '';
};
</script>

<style scoped>
.bg-purple {
  background-color: #6f42c1;
}

.table td {
  vertical-align: middle;
  min-width: 200px;
}
</style>
