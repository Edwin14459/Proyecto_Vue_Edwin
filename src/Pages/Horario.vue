<template>
  <div class="container">
    <h3>HORARIO DE SISTEMAS</h3>
    <table>
      <thead>
        <tr>
          <th>Hora</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miércoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(h, index) in Horario" :key="index" :class="{ recess: h.lunes === 'R', recess: h.martes === 'E', recess: h.miercoles === 'C E', recess: h.jueves === 'S', recess: h.viernes === 'O' }">
          <td>{{ h.hora }}</td>
          <td>{{ h.lunes }}</td>
          <td>{{ h.martes }}</td>
          <td>{{ h.miercoles }}</td>
          <td>{{ h.jueves }}</td>
          <td>{{ h.viernes }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const Horario = ref([
{hora: "7:00 - 8:00", lunes: "Matemáticas", martes: "Física", miercoles: "Química", jueves: "Biología", viernes: "Historia"},
{hora: "8:00 - 9:00", lunes: "Literatura", martes: "Matemáticas", miercoles: "Educación Física", jueves: "Química", viernes: "Geografía"},
{hora: "9:00 - 10:00", lunes: "Inglés", martes: "Historia", miercoles: "Matemáticas", jueves: "Física", viernes: "Arte"},
{hora: "10:00 - 10:30", lunes: "R", martes: "E", miercoles: "C  E", jueves: "S", viernes: "O"},
{hora: "10:30 - 11:30", lunes: "Informática", martes: "Biología", miercoles: "Inglés", jueves: "Matemáticas", viernes: "Filosofía"},
{hora: "11:30 - 12:30", lunes: "Química", martes: "Informática", miercoles: "Física", jueves: "Historia", viernes: "Matemáticas"},
{hora: "12:30 - 13:30", lunes: "Biología", martes: "Educación Física", miercoles: "Literatura", jueves: "Inglés", viernes: "Ciencias Sociales"}
]);
</script>

<style scoped>
.container {
max-width: 900px;
margin: 2rem auto;
padding: 1.5rem;
font-family: 'Poppins', sans-serif;
background: #eee9bc;
border-radius: 1rem;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h3 {
text-align: center;
color: #1e40af;
margin-bottom: 1.5rem;
font-size: 1.8rem;
font-weight: bold;
}

table {
width: 100%;
border-collapse: collapse;
}

th, td {
padding: 0.75rem;
text-align: center;
}

th {
background: #1e40af;
color: white;
}

td {
background: #ffffff;
}

tr:hover:not(.recess) td {
background: #e0f2fe;
}

.recess {
background: #fde047;
font-weight: bold;
}

td:first-child {
font-weight: 600;
color: #1e40af;
}
</style>
