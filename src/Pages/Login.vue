<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <h2>{{ isRegistering ? 'REGISTRARSE' : 'BIENVENIDO' }}</h2>
      </div>

      <div class="login-body">
        <form class="login-form" @submit.prevent="handleSubmit">
          <!-- Registro: Nombre de Usuario -->
          <div v-if="isRegistering" class="form-group">
            <label for="username">Nombre de Usuario</label>
            <div class="input-group">
              <input type="text" id="username" class="form-control" v-model="form.username" />
            </div>
          </div>

          <!-- Correo Electrónico -->
          <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <div class="input-group">
              <input type="email" id="email" class="form-control" v-model="form.email" />
            </div>
          </div>

          <!-- Contraseña -->
          <div class="form-group">
            <label for="password">Contraseña</label>
            <div class="input-group">
              <input :type="showPassword ? 'text' : 'password'" id="password" class="form-control" v-model="form.password" />
              <span class="toggle-password" @click="showPassword = !showPassword">
                <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24">
                  </path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
            </div>
          </div>

          <!-- Confirmar contraseña solo en registro -->
          <div v-if="isRegistering" class="form-group">
            <label for="confirmPassword">Confirmar Contraseña</label>
            <div class="input-group">
              <input :type="showPassword ? 'text' : 'password'" id="confirmPassword" class="form-control" v-model="form.confirmPassword" />
            </div>
          </div>

          <!-- Botón -->
          <button type="submit" class="login-btn">
            {{ isRegistering ? 'Crear Cuenta' : 'Iniciar Sesión' }}
          </button>

          <!-- Cambiar entre login y registro -->
          <div class="auth-options">
            <a href="#" class="auth-link" @click.prevent="isRegistering = !isRegistering">
              {{ isRegistering ? '¿Ya tienes una cuenta?' : 'Crear cuenta' }}
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showPassword = ref(false)
const isRegistering = ref(false)

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleSubmit = () => {
  if (isRegistering.value) {
    if (form.value.password !== form.value.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }
    // Aquí podrías enviar los datos al backend
    alert(`Registrado: ${form.value.username} (${form.value.email})`)
  } else {
    // Iniciar sesión
    alert(`Iniciando sesión con ${form.value.email}`)
  }
}
</script>

<style scoped>
/* Contenedor principal */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    padding: 20px;
}

/* Tarjeta de Login */
.login-card {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    overflow: hidden;
}

/* Cabecera */
.login-header {
    padding: 32px 32px 16px;
    text-align: center;
    background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
    color: white;
}

.login-header h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.5px;
}

/* Cuerpo */
.login-body {
    padding: 32px;
}

/* Formulario */
.login-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #4a5568;
}

/* Estilo del input con borde redondeado */
.input-group {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 8px;
    /* Mantiene el borde redondeado */
    overflow: hidden;
    /* Evita que el input sobresalga */
    border: 1px solid #e2e8f0;
    background: white;
}

.form-control {
    width: 100%;
    padding: 12px 40px 12px 16px;
    border: none;
    border-radius: 8px;
    /* Borde redondeado completo */
    font-size: 0.9375rem;
    background-color: #f8fafc;
    appearance: none;
    outline: none;
}

.form-control:focus {
    border: none;
    outline: none;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
}

/* Icono para mostrar/ocultar contraseña */
.toggle-password {
    position: absolute;
    right: 12px;
    cursor: pointer;
    color: #718096;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
}

/* Botón de login con estilos corregidos */
.login-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 8px;
}

.login-btn:hover {
    background: linear-gradient(135deg, #3a56e8 0%, #2f0b9e 100%);
    box-shadow: 0 4px 12px rgba(67, 97, 238, 0.2);
}

/* Opciones de autenticación */
.auth-options {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
    flex-wrap: wrap;
}

.auth-link {
    font-size: 0.8125rem;
    color: #4361ee;
    text-decoration: none;
    transition: color 0.2s ease;
    text-align: center;
}

.auth-link:hover {
    color: #3a0ca3;
    text-decoration: underline;
}

/* Estilos responsive */
@media (max-width: 480px) {
    .login-card {
        border-radius: 0;
    }

    .login-header,
    .login-body {
        padding: 24px;
    }

    .auth-options {
        flex-direction: column;
        gap: 8px;
        align-items: center;
    }
}
</style>
